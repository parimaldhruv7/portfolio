# Deployment guide

This project is a **split stack**: a static **React** frontend (`frontend/`) and a **FastAPI** API (`backend/`). Deploy them as two services, then point your **domain DNS** (for example at Hostinger) at those services.

---

## Table of contents

1. [What you are deploying](#1-what-you-are-deploying)
2. [Secrets and environment variables](#2-secrets-and-environment-variables)
3. [MongoDB](#3-mongodb)
4. [Deploy the backend (API)](#4-deploy-the-backend-api)
5. [Deploy the frontend (static site)](#5-deploy-the-frontend-static-site)
6. [Connect your Hostinger (or any) domain](#6-connect-your-hostinger-or-any-domain)
7. [Optional: Hostinger VPS (both apps on one server)](#7-optional-hostinger-vps-both-apps-on-one-server)
8. [Verify after deploy](#8-verify-after-deploy)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. What you are deploying

| Part | Folder | Output / runtime |
|------|--------|-------------------|
| Frontend | `frontend/` | Run `npm run build` → static files in `frontend/build/` |
| Backend | `backend/` | Python process: `uvicorn server:app` (FastAPI, routes under `/api`) |

The contact form calls `POST {REACT_APP_BACKEND_URL}/api/contact`. The browser must be allowed by **CORS** on the API.

---

## 2. Secrets and environment variables

**Never commit** real `.env` files to Git. Add `.env` to `.gitignore` (already typical). Store production values only in:

- Your host’s **Environment variables** UI (Render, Railway, Vercel, Netlify, etc.), or  
- A **`.env` file on the VPS** (not in the repo), readable only by the deploy user.

### Backend (`backend/.env` on server, or platform env vars)

| Variable | Required | Purpose |
|----------|----------|---------|
| `MONGO_URL` | Yes | MongoDB connection string (e.g. Atlas). |
| `DB_NAME` | Yes | Database name. |
| `CORS_ORIGINS` | Recommended in production | Comma-separated list of **exact** frontend origins, e.g. `https://yourdomain.com,https://www.yourdomain.com`. If unset, the app defaults to permissive behaviour; set explicit origins for production. |
| `EMAIL_USER` | For contact form | SMTP username (e.g. Gmail address). |
| `EMAIL_PASSWORD` | For contact form | SMTP app password (not your normal Gmail password). |
| `EMAIL_HOST` | Optional | Default `smtp.gmail.com`. |
| `EMAIL_PORT` | Optional | Default `587`. |

### Frontend (set on the **build** host, e.g. Netlify/Vercel)

Create React embeds only variables whose names start with `REACT_APP_` at **build time**.

| Variable | Required | Purpose |
|----------|----------|---------|
| `REACT_APP_BACKEND_URL` | Yes (for contact form) | Public URL of the API **without** a trailing slash, e.g. `https://api.yourdomain.com`. |

After changing env vars, **trigger a new build** of the frontend so the bundle picks up the value.

---

## 3. MongoDB

Use **MongoDB Atlas** (free tier is fine) or any reachable MongoDB instance:

1. Create a cluster and database user.  
2. Get the connection string → use it as `MONGO_URL`.  
3. Set `DB_NAME` to the database you want (e.g. `portfolio`).  
4. In Atlas **Network Access**, allow the IP of your API host (`0.0.0.0/0` is convenient for PaaS; tighter IPs are better on a VPS).

---

## 4. Deploy the backend (API)

Common options: **Render**, **Railway**, **Fly.io**, **DigitalOcean App Platform**, or a **VPS**.

### General rules

- **Root directory**: `backend` (the folder that contains `server.py` and `requirements.txt`).  
- **Install**: `pip install -r requirements.txt` (platforms often detect Python and do this).  
- **Start command** (adjust if the platform sets `PORT`):

```bash
uvicorn server:app --host 0.0.0.0 --port 8000
```

If the platform injects `PORT` (Render, Railway, etc.):

```bash
uvicorn server:app --host 0.0.0.0 --port ${PORT:-8000}
```

- Add all **backend** env vars from the table above in the service settings.  
- Note the **public HTTPS URL** of the service (e.g. `https://your-api.onrender.com`). You will use it as `REACT_APP_BACKEND_URL` for the frontend build, or put it behind `https://api.yourdomain.com` via DNS (see below).

### Health check (optional)

Your API exposes routes such as:

- `GET https://<api-host>/api/` → JSON greeting  
- `POST https://<api-host>/api/contact` → contact form (needs email env)

---

## 5. Deploy the frontend (static site)

### Build locally (to inspect output)

```bash
cd frontend
npm install
# Set API URL for this build (Windows PowerShell example):
# $env:REACT_APP_BACKEND_URL="https://api.yourdomain.com"
npm run build
```

The folder `frontend/build/` is what you upload or what CI uploads.

### Netlify

1. Connect the Git repo (or drag-and-drop `build/`).  
2. **Base directory**: `frontend`.  
3. **Build command**: `npm run build`.  
4. **Publish directory**: `build`.  
5. **Environment variables**: add `REACT_APP_BACKEND_URL` = your public API URL.  
6. Deploy.

### Vercel

1. Import project; set **Root Directory** to `frontend`.  
2. Framework preset: Create React App (or “Other” with build `npm run build`, output `build`).  
3. Add env `REACT_APP_BACKEND_URL`.  
4. Deploy.

### Cloudflare Pages

1. Build command: `npm run build` (root `frontend` or monorepo config pointing at `frontend`).  
2. Output directory: `build`.  
3. Add `REACT_APP_BACKEND_URL` in **Settings → Environment variables** (for Production).

---

## 6. Connect your Hostinger (or any) domain

Your domain registrar (e.g. Hostinger) only needs **DNS records** pointing to where the site and API are hosted.

### Example layout

| Hostname | Points to | Use |
|----------|-----------|-----|
| `yourdomain.com` / `www` | Netlify/Vercel/Cloudflare (CNAME or their instructions) | React site |
| `api.yourdomain.com` | CNAME to Render/Railway hostname **or** A record to VPS IP | FastAPI |

Steps:

1. In Netlify/Vercel/etc., add **custom domain** and follow their DNS instructions.  
2. In Hostinger: **Domains → DNS / Zone editor** → add the **CNAME** or **A** records they show.  
3. For the API, if the provider gives you a hostname like `xxx.onrender.com`, create **CNAME** `api` → `xxx.onrender.com` (if the provider allows custom domain + SSL; otherwise use their URL as `REACT_APP_BACKEND_URL` first).

Wait for DNS propagation (minutes to a few hours). Enable **HTTPS** on both frontend and API hosts (usually automatic on Netlify/Vercel/Render).

### CORS

Set on the backend, for example:

```text
CORS_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

No spaces between commas unless your host trims them; match the exact browser origin (scheme + host, no path).

---

## 7. Optional: Hostinger VPS (both apps on one server)

Use a **VPS** if you want full control. Outline only; adapt versions to your OS.

1. **Install**: Node.js LTS, Python 3.11+, `nginx`, `certbot`.  
2. **Backend**: clone repo, `cd portfolio/backend`, create `venv`, `pip install -r requirements.txt`, create `.env` with secrets, run:

   ```bash
   uvicorn server:app --host 127.0.0.1 --port 8000
   ```

   Run this under **systemd** so it restarts on reboot (create a `portfolio-api.service` that `ExecStart`s the venv’s `uvicorn`).

3. **Nginx**:  
   - `server_name api.yourdomain.com;` → `proxy_pass http://127.0.0.1:8000;`  
   - `server_name yourdomain.com www.yourdomain.com;` → `root` pointing to `frontend/build` after you `npm run build` on the server (or SCP the `build` folder from your PC).

4. **SSL**: `certbot --nginx` for both server names.

5. **Frontend build on server**: `cd portfolio/frontend`, create `.env` with `REACT_APP_BACKEND_URL=https://api.yourdomain.com`, then `npm ci && npm run build`.

---

## 8. Verify after deploy

1. Open the live site; browse sections (no console errors for assets).  
2. Open DevTools → Network; submit the contact form; confirm `POST .../api/contact` returns **200** and success JSON.  
3. If CORS errors appear, fix `CORS_ORIGINS` to include your exact site URL and redeploy/restart the API.

---

## 9. Troubleshooting

| Issue | What to check |
|-------|----------------|
| Contact form fails / network error | `REACT_APP_BACKEND_URL` correct; API reachable in browser; CORS. |
| CORS blocked | `CORS_ORIGINS` includes `https://yourdomain.com` (and `www` if used). |
| API crashes on start | `MONGO_URL` / `DB_NAME` set; Atlas IP allowlist includes server. |
| Email not sent | `EMAIL_USER` / `EMAIL_PASSWORD`; Gmail needs an **App password** if 2FA is on. |
| Old API URL in UI | Rebuild frontend after changing `REACT_APP_BACKEND_URL`. |

---

## GitHub and secrets

- Do **not** push `backend/.env` or `frontend/.env` with real credentials.  
- For **GitHub Actions** deploys, use **Repository → Settings → Secrets and variables → Actions** and inject them in the workflow as env for the deploy step only.

For questions specific to Hostinger’s panel (DNS vs VPS vs shared hosting), use their docs for **DNS zone** or **VPS + Node/Python**; shared PHP hosting is usually **not** suitable for this FastAPI app unless they explicitly support long-running Python apps.

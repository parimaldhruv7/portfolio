import React, { useEffect } from "react";
import "@/App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function stripEmergentFromDom() {
  try {
    document
      .querySelectorAll(
        'script[src*="emergent"],script[src*="assets.emergent"],#emergent-badge,a[href*="emergent.sh"]',
      )
      .forEach((el) => el.remove());
    document.querySelectorAll("a").forEach((a) => {
      if (!/made with emergent/i.test((a.textContent || "").trim())) return;
      let n = a;
      for (let i = 0; i < 8 && n?.parentElement; i++) {
        const st = window.getComputedStyle(n);
        if (st.position === "fixed" || st.position === "absolute") {
          n.remove();
          return;
        }
        n = n.parentElement;
      }
      a.remove();
    });
  } catch (_) {
    /* ignore */
  }
}

function App() {
  useEffect(() => {
    stripEmergentFromDom();
    const obs = new MutationObserver(stripEmergentFromDom);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

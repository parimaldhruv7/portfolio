#!/usr/bin/env python3
"""
Backend API Testing Script for Portfolio Contact Form
Tests the contact form email functionality
"""

import requests
import json
import sys
import os
from datetime import datetime

# Get backend URL from frontend .env
BACKEND_URL = "https://dev-parimal.preview.emergentagent.com/api"

def test_contact_form():
    """Test the contact form submission endpoint"""
    print("=" * 60)
    print("TESTING CONTACT FORM EMAIL FUNCTIONALITY")
    print("=" * 60)
    
    # Test data as specified in the review request
    test_data = {
        "name": "Test User",
        "email": "test@example.com", 
        "message": "This is a test message from the portfolio contact form"
    }
    
    print(f"Testing endpoint: {BACKEND_URL}/contact")
    print(f"Test data: {json.dumps(test_data, indent=2)}")
    print("-" * 60)
    
    try:
        # Send POST request to contact endpoint
        response = requests.post(
            f"{BACKEND_URL}/contact",
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=30
        )
        
        print(f"Response Status Code: {response.status_code}")
        print(f"Response Headers: {dict(response.headers)}")
        
        # Check if response is JSON
        try:
            response_data = response.json()
            print(f"Response Body: {json.dumps(response_data, indent=2)}")
        except json.JSONDecodeError:
            print(f"Response Body (non-JSON): {response.text}")
            response_data = None
        
        # Verify expected response structure
        if response.status_code == 200:
            if response_data and isinstance(response_data, dict):
                success = response_data.get('success')
                message = response_data.get('message')
                
                print("\n" + "=" * 40)
                print("VERIFICATION RESULTS:")
                print("=" * 40)
                print(f"✓ Status Code 200: {'PASS' if response.status_code == 200 else 'FAIL'}")
                print(f"✓ Response has 'success' field: {'PASS' if 'success' in response_data else 'FAIL'}")
                print(f"✓ Success is True: {'PASS' if success is True else 'FAIL'}")
                print(f"✓ Response has 'message' field: {'PASS' if 'message' in response_data else 'FAIL'}")
                expected_message = "Thank you for your message! I'll get back to you soon."
                print(f"✓ Expected message: {'PASS' if message == expected_message else 'FAIL'}")
                
                # Overall test result
                expected_message = "Thank you for your message! I'll get back to you soon."
                all_checks_pass = (
                    response.status_code == 200 and
                    'success' in response_data and
                    success is True and
                    'message' in response_data and
                    message == expected_message
                )
                
                print(f"\nOVERALL TEST RESULT: {'PASS' if all_checks_pass else 'FAIL'}")
                return all_checks_pass
            else:
                print("\n❌ FAIL: Response is not valid JSON object")
                return False
        else:
            print(f"\n❌ FAIL: Expected status code 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"\n❌ FAIL: Request failed with error: {str(e)}")
        return False
    except Exception as e:
        print(f"\n❌ FAIL: Unexpected error: {str(e)}")
        return False

def test_contact_form_validation():
    """Test contact form validation with invalid data"""
    print("\n" + "=" * 60)
    print("TESTING CONTACT FORM VALIDATION")
    print("=" * 60)
    
    # Test cases for validation
    test_cases = [
        {
            "name": "Empty Name Test",
            "data": {"name": "", "email": "test@example.com", "message": "Test message"},
            "expected_status": 422
        },
        {
            "name": "Invalid Email Test", 
            "data": {"name": "Test User", "email": "invalid-email", "message": "Test message"},
            "expected_status": 422
        },
        {
            "name": "Empty Message Test",
            "data": {"name": "Test User", "email": "test@example.com", "message": ""},
            "expected_status": 422
        }
    ]
    
    validation_results = []
    
    for test_case in test_cases:
        print(f"\nTesting: {test_case['name']}")
        print(f"Data: {json.dumps(test_case['data'], indent=2)}")
        
        try:
            response = requests.post(
                f"{BACKEND_URL}/contact",
                json=test_case['data'],
                headers={"Content-Type": "application/json"},
                timeout=30
            )
            
            print(f"Response Status: {response.status_code}")
            expected_status = test_case['expected_status']
            
            if response.status_code == expected_status:
                print(f"✓ PASS: Got expected status {expected_status}")
                validation_results.append(True)
            else:
                print(f"❌ FAIL: Expected status {expected_status}, got {response.status_code}")
                validation_results.append(False)
                
        except Exception as e:
            print(f"❌ FAIL: Error during validation test: {str(e)}")
            validation_results.append(False)
    
    all_validation_pass = all(validation_results)
    print(f"\nVALIDATION TESTS RESULT: {'PASS' if all_validation_pass else 'FAIL'}")
    return all_validation_pass

def check_backend_logs():
    """Check backend logs for email sending confirmation"""
    print("\n" + "=" * 60)
    print("CHECKING BACKEND LOGS")
    print("=" * 60)
    
    try:
        # Check supervisor backend logs
        import subprocess
        result = subprocess.run(
            ["tail", "-n", "50", "/var/log/supervisor/backend.out.log"],
            capture_output=True,
            text=True,
            timeout=10
        )
        
        if result.returncode == 0:
            logs = result.stdout
            print("Recent backend logs:")
            print("-" * 40)
            print(logs)
            
            # Look for email-related log entries
            if "Contact email sent successfully" in logs:
                print("\n✓ FOUND: Email sending confirmation in logs")
                return True
            elif "Failed to send contact email" in logs:
                print("\n❌ FOUND: Email sending failure in logs")
                return False
            else:
                print("\n⚠️  No email-related log entries found")
                return None
        else:
            print(f"Failed to read logs: {result.stderr}")
            return None
            
    except Exception as e:
        print(f"Error checking logs: {str(e)}")
        return None

def main():
    """Main test execution"""
    print(f"Starting Contact Form API Tests at {datetime.now()}")
    print(f"Backend URL: {BACKEND_URL}")
    
    # Run tests
    contact_test_result = test_contact_form()
    validation_test_result = test_contact_form_validation()
    log_check_result = check_backend_logs()
    
    # Summary
    print("\n" + "=" * 60)
    print("TEST SUMMARY")
    print("=" * 60)
    print(f"Contact Form Submission: {'PASS' if contact_test_result else 'FAIL'}")
    print(f"Validation Tests: {'PASS' if validation_test_result else 'FAIL'}")
    print(f"Backend Logs Check: {'PASS' if log_check_result else 'FAIL' if log_check_result is False else 'N/A'}")
    
    overall_success = contact_test_result and validation_test_result
    print(f"\nOVERALL RESULT: {'PASS' if overall_success else 'FAIL'}")
    
    return overall_success

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
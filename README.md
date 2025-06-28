# 📧 Cold Email Generator

An AI-powered web app that generates professional cold emails with customizable tones — and optionally sends them via Gmail using Google OAuth.

## 🌟 Features

- Generate cold emails using OpenAI GPT
- Choose tone: **Friendly**, **Formal**, or **Persuasive**
- Responsive frontend using React
- Flask backend with OpenAI integration
- Gmail API integration to send generated emails directly
- Cross-Origin support for frontend/backend dev mode

---


## 🚀 Tech Stack

| Layer      | Tech                  |
|------------|------------------------|
| Frontend   | React + JavaScript     |
| Backend    | Flask (Python)         |
| AI Model   | OpenAI GPT (Chat API)  |
| Email Send | Gmail API (OAuth2)     |
| Auth       | Google OAuth2          |

---

## 📁 Project Structure

![image](https://github.com/user-attachments/assets/063d49e7-ed81-4090-9390-f8f6ad01caa7)


---

## 🛠️ Setup Instructions



```bash
git clone https://github.com/your-username/cold-email-generator.git
cd cold-email-generator
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate (Windows)

pip install -r requirements.txt

openai.api_key = "YOUR_OPENAI_API_KEY"

Enable Gmail API
Visit: https://console.cloud.google.com/

Create a project

Enable Gmail API

Configure OAuth Consent Screen and OAuth Client ID (set redirect URI to http://localhost:8080 or similar)

Download credentials.json and place it in /backend

python gmail_send.py
# This opens browser for Google sign-in and saves token.json

cd ../frontend
npm install
npm start


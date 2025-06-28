from flask import Flask, request, jsonify
import openai
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

openai.api_key = "YOUR_OPENAI_API_KEY"  # Replace this with your OpenAI key

@app.route('/generate-email', methods=['POST'])
def generate_email():
    data = request.json
    recipient = data.get("recipient")
    purpose = data.get("purpose")
    sender = data.get("sender")
    tone = data.get("tone", "friendly")

    prompt = (
        f"Write a {tone} cold email to {recipient}.\n"
        f"The purpose of the email is: {purpose}\n"
        f"The email should be from: {sender}\n"
        "Keep it concise and effective."
    )

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo", 
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7
    )

    email_text = response['choices'][0]['message']['content']
    return jsonify({"email": email_text})

if __name__ == '__main__':
    app.run(debug=True)

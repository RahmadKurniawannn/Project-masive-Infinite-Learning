import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

API_KEY = os.getenv("API_KEY", "XArRI1nRLTa3xSBpzgitUf8WjTeDvMBXfj0K4bA6TdNT")
SCORING_URL = os.getenv("SCORING_URL", "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/d8c08237-aa2a-4a3b-a2b2-12c5e66f8668/predictions?version=2021-05-01")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    if 'input_data' not in data:
        return jsonify({"error": "No input data provided"}), 400
    
    payload = {
        "input_data": [
            {
                "fields": ["field1"],
                "values": [[data['input_data']]]
            }
        ]
    }

    headers = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + API_KEY}
    response = requests.post(SCORING_URL, json=payload, headers=headers)
    
    if response.status_code != 200:
        return jsonify({"error": "Failed to get response from model"}), response.status_code
    
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)

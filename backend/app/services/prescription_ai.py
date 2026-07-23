import json

from app.prompts.prescription_prompt import PRESCRIPTION_PROMPT
from app.services.huggingface import generate_response


async def analyze_prescription(text: str):

    prompt = PRESCRIPTION_PROMPT.format(
        prescription=text
    )

    response = await generate_response(prompt)

    try:
        return json.loads(response)

    except Exception:
        return {
            "error": "AI returned invalid JSON.",
            "raw": response,
        }
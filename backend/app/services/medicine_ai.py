import json

from app.prompts.medicine_prompt import MEDICINE_PROMPT
from app.services.huggingface import generate_response


async def analyze_medicine(text: str):

    prompt = MEDICINE_PROMPT.format(
        medicine=text
    )

    response = await generate_response(prompt)

    try:
        return json.loads(response)

    except Exception:

        return {
            "error": "AI returned invalid JSON.",
            "raw": response,
        }
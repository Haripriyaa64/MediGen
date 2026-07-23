import json

from app.prompts.symptoms_prompt import (
    SYMPTOMS_PROMPT,
)

from app.services.huggingface import (
    generate_response,
)


async def analyze_symptoms(
    symptoms: str,
):

    prompt = SYMPTOMS_PROMPT.format(
        symptoms=symptoms
    )

    response = await generate_response(
        prompt
    )

    try:
        return json.loads(response)

    except Exception:

        return {
            "error": "AI returned invalid JSON.",
            "raw": response,
        }
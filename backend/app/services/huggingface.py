from huggingface_hub import InferenceClient

from app.core.config import (
    HF_TOKEN,
    MODEL_ID,
)

client = InferenceClient(
    api_key=HF_TOKEN,
)


async def generate_response(message: str) -> str:

    completion = client.chat.completions.create(
        model=MODEL_ID,
        messages=[
            {
                "role": "system",
                "content": (
                    "You are MediGen AI, a professional AI medical assistant. "
                    "Provide educational medical information only. "
                    "Never provide a certain diagnosis. "
                    "Recommend consulting a qualified healthcare professional when appropriate."
                ),
            },
            {
                "role": "user",
                "content": message,
            },
        ],
        max_tokens=512,
        temperature=0.3,
    )

    return completion.choices[0].message.content
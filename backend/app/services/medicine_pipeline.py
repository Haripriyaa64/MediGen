from app.services.ocr import extract_text
from app.services.medicine_ai import analyze_medicine


async def analyze_medicine_file(file_path: str):

    text = extract_text(file_path)

    if not text.strip():

        return {
            "success": False,
            "error": "No text detected."
        }

    analysis = await analyze_medicine(text)

    return {
        "success": True,
        "ocr_text": text,
        "analysis": analysis,
        "error": None,
    }
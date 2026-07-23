from app.services.ocr import extract_text
from app.services.prescription_ai import analyze_prescription


async def analyze_file(file_path: str):

    text = extract_text(file_path)

    if not text.strip():
        return {
            "success": False,
            "error": "No text detected."
        }

    analysis = await analyze_prescription(text)

    return {
    "success": True,
    "ocr_text": text,
    "analysis": analysis,
}
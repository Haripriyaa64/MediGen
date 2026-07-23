from pathlib import Path

from fastapi import (
    APIRouter,
    UploadFile,
    File,
    HTTPException,
)

from app.schemas.medicine import MedicineResponse
from app.services.medicine_pipeline import analyze_medicine_file

router = APIRouter(
    prefix="/medicine",
    tags=["Medicine Scanner"],
)

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

ALLOWED_TYPES = {
    "image/png",
    "image/jpeg",
    "image/jpg",
    "application/pdf",
}


@router.post(
    "/analyze",
    response_model=MedicineResponse,
)
async def analyze(
    file: UploadFile = File(...)
):

    if file.content_type not in ALLOWED_TYPES:

        raise HTTPException(
            status_code=400,
            detail="Unsupported file."
        )

    contents = await file.read()

    file_path = UPLOAD_DIR / file.filename

    with open(file_path, "wb") as buffer:
        buffer.write(contents)

    result = await analyze_medicine_file(
        str(file_path)
    )

    return MedicineResponse(**result)
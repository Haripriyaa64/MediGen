from pathlib import Path

from fastapi import (
    APIRouter,
    File,
    HTTPException,
    UploadFile,
)

from app.schemas.prescription import (
    UploadResponse,
    OCRResponse,
)

from app.schemas.analysis import AnalysisResponse

from app.services.ocr import extract_text
from app.services.pipeline import analyze_file

router = APIRouter(
    prefix="/prescription",
    tags=["Prescription"],
)

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

ALLOWED_TYPES = {
    "application/pdf",
    "image/png",
    "image/jpeg",
    "image/jpg",
}

MAX_SIZE = 10 * 1024 * 1024


@router.post(
    "/upload",
    response_model=UploadResponse,
)
async def upload_prescription(
    file: UploadFile = File(...)
):

    if file.content_type not in ALLOWED_TYPES:
        raise HTTPException(
            status_code=400,
            detail="Only PDF, PNG and JPG files are allowed.",
        )

    contents = await file.read()

    if len(contents) > MAX_SIZE:
        raise HTTPException(
            status_code=400,
            detail="Maximum file size is 10 MB.",
        )

    file_path = UPLOAD_DIR / file.filename

    with open(file_path, "wb") as buffer:
        buffer.write(contents)

    return UploadResponse(
        filename=file.filename,
        content_type=file.content_type,
        size=len(contents),
        path=str(file_path),
    )

@router.post(
    "/ocr",
    response_model=OCRResponse,
)
async def ocr(
    file: UploadFile = File(...)
):

    if file.content_type not in ALLOWED_TYPES:
        raise HTTPException(
            status_code=400,
            detail="Only PDF, PNG and JPG files are allowed.",
        )

    contents = await file.read()

    file_path = UPLOAD_DIR / file.filename

    with open(file_path, "wb") as buffer:
        buffer.write(contents)

    text = extract_text(str(file_path))

    return OCRResponse(
        extracted_text=text
    )

@router.post(
    "/analyze",
    response_model=AnalysisResponse,
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

    result = await analyze_file(
        str(file_path)
    )

    return AnalysisResponse(**result)
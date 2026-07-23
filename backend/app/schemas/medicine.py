from typing import Any
from pydantic import BaseModel


class MedicineResponse(BaseModel):
    success: bool
    ocr_text: str | None = None
    analysis: Any = None
    error: str | None = None
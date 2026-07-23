from typing import Any
from pydantic import BaseModel


class AnalysisResponse(BaseModel):
    success: bool
    ocr_text: str | None = None
    analysis: Any = None
    error: str | None = None
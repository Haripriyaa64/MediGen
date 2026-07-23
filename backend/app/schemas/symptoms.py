from typing import Any

from pydantic import BaseModel


class SymptomsRequest(BaseModel):
    symptoms: str


class SymptomsResponse(BaseModel):
    success: bool
    analysis: Any = None
    error: str | None = None
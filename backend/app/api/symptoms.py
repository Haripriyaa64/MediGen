from fastapi import APIRouter

from app.schemas.symptoms import (
    SymptomsRequest,
    SymptomsResponse,
)

from app.services.symptoms_ai import (
    analyze_symptoms,
)

router = APIRouter(
    prefix="/symptoms",
    tags=["Symptoms"],
)


@router.post(
    "/analyze",
    response_model=SymptomsResponse,
)
async def analyze(
    request: SymptomsRequest,
):

    result = await analyze_symptoms(
        request.symptoms
    )

    return SymptomsResponse(
        success=True,
        analysis=result,
        error=None,
    )
from fastapi import APIRouter, HTTPException

from app.schemas.chat import (
    ChatRequest,
    ChatResponse,
)

from app.services.huggingface import generate_response

router = APIRouter(
    prefix="/chat",
    tags=["Chat"],
)


@router.post("", response_model=ChatResponse)
async def chat(request: ChatRequest):

    try:

        answer = await generate_response(
            request.message
        )

        return ChatResponse(
            response=answer
        )

    except Exception as e:

        print(e)

        raise HTTPException(
            status_code=500,
            detail=str(e),
        )
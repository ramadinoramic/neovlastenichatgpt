from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class SwapIn(BaseModel):
    exercise: str

ALTERNATIVES = {
    "Bench Press": "Sklekovi",
    "Čučanj sa šipkom": "Goblet čučanj",
    "Mrtvo dizanje": "Hip hinge s bučicama"
}

@router.post("/swap")
def swap_exercise(payload: SwapIn):
    return {"original": payload.exercise, "alternative": ALTERNATIVES.get(payload.exercise, "Elastična traka varijanta")}

class LogIn(BaseModel):
    exercise: str
    sets: int
    weight_kg: float

@router.post("/log")
def log_workout(payload: LogIn):
    return {"saved": True, "data": payload.model_dump()}

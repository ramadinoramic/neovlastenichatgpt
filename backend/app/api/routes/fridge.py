from fastapi import APIRouter
from pydantic import BaseModel, Field
from typing import List

router = APIRouter()

class FridgeIn(BaseModel):
    ingredients: List[str] = Field(min_length=3, max_length=8)

@router.post("/recipe")
def recipe(payload: FridgeIn):
    # MVP fallback bez OpenAI ključa
    items = ", ".join(payload.ingredients)
    return {
        "title": "Brzi proteinski obrok",
        "ingredients": payload.ingredients,
        "instructions": f"Iskoristi: {items}. Prvo pripremi proteine, dodaj povrće i složene UH, začini i posluži.",
        "macros": {"protein_g": 35, "carbs_g": 45, "fat_g": 15}
    }

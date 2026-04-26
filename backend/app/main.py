from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes.checkin import router as checkin_router
from app.api.routes.workout import router as workout_router
from app.api.routes.fridge import router as fridge_router

app = FastAPI(title="Neovlašteni fitness instruktor API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(checkin_router, prefix="/checkin", tags=["checkin"])
app.include_router(workout_router, prefix="/workout", tags=["workout"])
app.include_router(fridge_router, prefix="/fridge", tags=["fridge"])

@app.get("/health")
def health():
    return {"status": "ok"}

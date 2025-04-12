from fastapi import FastAPI
from src.router import router as router_crypto
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.include_router(router_crypto)


origins = [
    "http://127.0.0.1:5174",
    "http://localhost:5174",
]

app.add_middleware(
    CORSMiddleware, 
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



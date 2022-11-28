from typing import List

from crud.del_reservation import del_reservation
from crud.get_reservations import get_reservations
from crud.put_reservation import handle_input_reservation
from db.check_tables import check_tables
from fastapi import Body, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models.reservation import Reservation

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"], # FIXME
    allow_credentials = True,
    allow_methods = ["*"], # FIXME
    allow_headers = ["*"], # FIXME
)

@app.on_event("startup")
async def db_check():
    check_tables()

@app.get("/reservations", response_model = List[Reservation])
async def get_all_reservations():
    return get_reservations()

@app.put("/reservation")
async def put_reservation(reservation: Reservation = Body(...)):
    handle_input_reservation(reservation)

@app.delete("/reservation")
async def delete_reservation(reservation: Reservation = Body(...)):
    del_reservation(reservation)
from typing import Optional

from pydantic import BaseModel


class Reservation(BaseModel):
    szemelyi: str
    vezeteknev: str
    keresztnev: str
    nem: str
    szul_datun: str
    telepules: str
    utca: str
    hazszam: str
    email: str
    szobatipus: str
    erkezes: str
    tavozas: str
    foszam: int

    id: Optional[int]
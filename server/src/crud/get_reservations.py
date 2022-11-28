from typing import List

from db.connection import engine
from models.reservation import Reservation


def get_reservations() -> List[Reservation]:
    result: List[Reservation] = []
    connection = engine.connect()

    result_sql = connection.execute("select * from foglalas;").all()
    for result_line in result_sql:
        config = {
            "id": result_line[0], 
            "szemelyi": result_line[1],
            "vezeteknev": result_line[2],
            "keresztnev": result_line[3],
            "nem": result_line[4],
            "szul_datun": result_line[5],
            "telepules": result_line[6],
            "utca": result_line[7],
            "hazszam": result_line[8],
            "email": result_line[9],
            "szobatipus": result_line[10],
            "erkezes": result_line[11],
            "tavozas": result_line[12],
            "foszam": result_line[13],
        }
        result.append(Reservation(**config))

    return result


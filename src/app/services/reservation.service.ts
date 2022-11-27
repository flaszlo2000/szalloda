import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FullReservation } from '../models/foglalas.model';


const data_from_server: Array<FullReservation> = [
  {
    "email": "a@a.a",
    "erkezes": "idk",
    "tavozas": "idk",
    "foszam": 1,
    "keresztnev": "keresztnev pelda",
    "vezeteknev": "vezeteknev pelda",
    "szobatipus": "random szoba tipus",
    "szul_datun": "datum",
    "utca": "random utca",
    "hazszam": 'idk',
    "telepules": "alma",
    "szemelyi": "1234",
    "nem": "igen",
    "id": 0
  },
  {
    "email": "b@a.a",
    "erkezes": "bidk",
    "tavozas": "bidk",
    "foszam": 2,
    "keresztnev": "bkeresztnev pelda",
    "vezeteknev": "bvezeteknev pelda",
    "szobatipus": "brandom szoba tipus",
    "szul_datun": "bdatum",
    "utca": "brandom utca",
    "hazszam": 'bidk',
    "telepules": "balma",
    "szemelyi": "b1234",
    "nem": "bigen",
    "id": 1
  },
];


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }


  public getAllReservations(): Observable<Array<FullReservation>> {
    return of(data_from_server);
  }

  public deleteReservation(reservation_id: Number): void {
    console.log(reservation_id);
  }
}

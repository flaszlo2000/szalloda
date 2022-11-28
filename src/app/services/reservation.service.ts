import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { FullReservation } from '../models/foglalas.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http_client: HttpClient) { }


  public getAllReservations(): Observable<Array<FullReservation>> {
    return this.http_client.get("http://localhost:8000/reservations") as Observable<Array<FullReservation>>;
  }

  public deleteReservation(reservation_id: Number): void {
    console.log(reservation_id);
  }

  public updateReservation(reservation: FullReservation): void {
    console.log("update");
  }
}

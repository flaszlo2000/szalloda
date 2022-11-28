import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FullReservation } from '../models/foglalas.model';
import { ReservationService } from '../services/reservation.service';
import { map } from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public all_reservations?: Observable<Array<FullReservation>>;

  constructor(private reservation_service: ReservationService) {
    this.all_reservations = this.reservation_service.getAllReservations();
  }

  public deleteReservation(reservation_id: Number): void {
    this.reservation_service.deleteReservation(reservation_id);
  }

  ngOnInit(): void {
  }

  public toggleReservationEdit(reservation: FullReservation): void {
    reservation.edit = !reservation.edit;
  }
}

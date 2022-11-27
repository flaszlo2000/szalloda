import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FullReservation } from '../models/foglalas.model';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private reservation_service: ReservationService) { }

  public get allReservations(): Observable<Array<FullReservation>> {
    return this.reservation_service.getAllReservations();
  }

  public deleteReservation(reservation_id: Number): void {
    this.reservation_service.deleteReservation(reservation_id);
  }

  ngOnInit(): void {
  }
}

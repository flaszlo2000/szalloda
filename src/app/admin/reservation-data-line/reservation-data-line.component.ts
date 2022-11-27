import { Component, Input, OnInit } from '@angular/core';
import { FullReservation } from 'src/app/models/foglalas.model';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-data-line',
  templateUrl: './reservation-data-line.component.html',
  styleUrls: ['./reservation-data-line.component.css']
})
export class ReservationDataLineComponent implements OnInit {
  public inner_reservation?: FullReservation;
  public edit: Boolean = false;

  @Input() set reservation(reservation: FullReservation) {    
    this.inner_reservation = reservation;

    if(!!this.inner_reservation.edit) {
      this.edit = this.inner_reservation.edit;
    }
  }

  constructor(private reservation_service: ReservationService) { }

  ngOnInit(): void {
  }

  //#region // TODO nasty, bc time limit i keep this this way
  public updateReservation(): void {
    if(!!this.inner_reservation) {
      this.reservation_service.updateReservation(this.inner_reservation);
    } else {
      console.warn("uff");
    }
  }

  public deleteReservation(): void {
    if(!!this.inner_reservation) {
      this.reservation_service.deleteReservation(this.inner_reservation.id)
    } else {
      console.warn("uff")
    }
  }
  //#endregion
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RoomType } from '../models/szoba_tipus.model';


const room_types: Array<RoomType> = [
  {
    "value": "Standard szoba"
  },
  {
    "value": "Deluxe szoba"
  },
  {
    "value": "Executive szoba" 
  },
  {
    "value": "Junior lakosztály"
  },
  {
    "value": "Lakosztály"
  }
] 


@Injectable({
  providedIn: 'root'
})
export class SzobatipusService {

  constructor() { }

  public getAllRoomType(): Observable<Array<RoomType>> {
    return of(room_types);
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, Validators} from '@angular/forms';
import { FoglalasModel, FoglalasReszletModel } from '../models/foglalas.model';
import { SzobatipusService } from '../services/szobatipus.service';
import { Observable } from 'rxjs';
import { RoomType } from '../models/szoba_tipus.model';


@Component({
  selector: 'app-foglalas',
  templateUrl: './foglalas.component.html',
  styleUrls: ['./foglalas.component.css']
})
export class FoglalasComponent implements OnInit {
  public first_data: FoglalasModel = {
    "szemelyi": "",
    "vezeteknev": "",
    "keresztnev": "",
    "nem": "",
    "szul_datun": "",
    "telepules": "",
    "utca": "",
    "hazszam": "",
    "email": "",
  }

  public second_data: FoglalasReszletModel = {
    "erkezes": "",
    "foszam": 0,
    "szobatipus": "",
    "tavozas": ""
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  constructor(
    private _formBuilder: FormBuilder,
    private http:HttpClient,
    private room_type_service: SzobatipusService
  ) { }

  public get szobatipus(): Observable<Array<RoomType>> {
    return this.room_type_service.getAllRoomType();
  }

  onSubmit(data: any) {
    console.warn(data);
    this.http.post('http://127.0.0.1:8000/', data).subscribe((result) => {
      console.warn("result", result)
    })
  }

  ngOnInit(): void {
  }

}

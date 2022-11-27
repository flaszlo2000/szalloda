import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-foglalas',
  templateUrl: './foglalas.component.html',
  styleUrls: ['./foglalas.component.css']
})
export class FoglalasComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  constructor(private _formBuilder: FormBuilder, private http:HttpClient) { }
  onSubmit(data: any) {
    console.warn(data);
    this.http.post('http://127.0.0.1:8000/', data).subscribe((result) => {
      console.warn("result", result)
    })
  }

  ngOnInit(): void {
  }

}

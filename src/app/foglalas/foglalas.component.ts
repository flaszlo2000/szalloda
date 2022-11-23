import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-foglalas',
  templateUrl: './foglalas.component.html',
  styleUrls: ['./foglalas.component.css']
})
export class FoglalasComponent implements OnInit {
  constructor(private http:HttpClient) { }
  onSubmit(data: any) {
    console.warn(data);
    this.http.post('http://localhost:8000/', data).subscribe((result) => {
      console.warn("result", result)
    })
  }

  ngOnInit(): void {
  }

}

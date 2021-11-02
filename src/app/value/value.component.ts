import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values : any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getValue();
  }

  getValue() {
    return this.http.get("http://localhost:5500/api/auth/").subscribe(response => {
      console.log(response);
      this.values = response;
    },err => console.log(err))
  } 

}

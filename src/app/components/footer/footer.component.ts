import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anio : number;
  fecha : string;
  constructor() {
    this.anio=new Date().getFullYear();
    this.fecha =new Date().toDateString();
  }    
  ngOnInit(): void {
  }

}

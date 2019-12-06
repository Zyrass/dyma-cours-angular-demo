import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  // le titre de la page
  public title: string = "Alain Guillon";
  public introduction: string = "J'apprends le framework ANGULAR grâce à la plateforme : Dyma.fr";

  constructor() { }

  ngOnInit() {
  }

}

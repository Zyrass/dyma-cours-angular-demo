import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapitre1',
  templateUrl: './chapitre1.component.html',
  styleUrls: ['./chapitre1.component.css']
})
export class Chapitre1Component implements OnInit {

  // le titre de la page
  public title: string = "Chapitre 1 - Introduction";

  constructor() { }

  ngOnInit() {
  }

}

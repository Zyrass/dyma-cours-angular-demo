import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapitre2',
  templateUrl: './chapitre2.component.html',
  styleUrls: ['./chapitre2.component.css']
})
export class Chapitre2Component implements OnInit {

  // le titre de la page
  public title: string = "Chapitre 2";
  public introduction: string = "J'ai compris ce que c'est un composant, les templates et je pense avoir compris le fonctionnement du Data binding";
  

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon, IonImg } from "@ionic/angular/standalone";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  standalone: true,
  imports: [IonImg, IonIcon, RouterLink]
})
export class TopNavComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

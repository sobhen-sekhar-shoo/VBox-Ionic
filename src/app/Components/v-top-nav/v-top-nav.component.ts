import { Component, OnInit, inject, TemplateRef } from '@angular/core';
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { IonIcon, IonImg, IonButton, IonLabel } from "@ionic/angular/standalone";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-v-top-nav',
  templateUrl: './v-top-nav.component.html',
  styleUrls: ['./v-top-nav.component.scss'],
  standalone: true,
  imports: [IonLabel, IonButton, IonImg, IonIcon, RouterLink, NgFor]
})
export class VTopNavComponent implements OnInit {

  private offcanvasService = inject(NgbOffcanvas);
  public LmAcList! : Array<any>;
  public LmSwList! : Array<any>;
  public LmOpList! : Array<any>;

  constructor() {
    this.LmAcList = [
      {
        "name": "Home",
        "id": 0,
        "icon": "home-outline",
        "redirect_url": "/v-tube/home"
      },
      {
        "name": "Watch",
        "id": 1,
        "icon": "videocam-outline",
        "redirect_url": "/v-tube/watch"
      },
      {
        "name": "History",
        "id": 2,
        "icon": "book-outline",
        "redirect_url": "#"
      },
      {
        "name": "Me",
        "id": 3,
        "icon": "person-circle-outline",
        "redirect_url": "#"
      },
    ];
    this.LmSwList = [
      {
        "name": "My Account",
        "id": 0,
        "icon": "person-outline",
        "redirect_url": "#"
      },
      {
        "name": "V Tune",
        "id": 1,
        "icon": "musical-notes-outline",
        "redirect_url": "#"
      },
      {
        "name": "V Chat",
        "id": 2,
        "icon": "chatbubbles-outline",
        "redirect_url": "#"
      },
      {
        "name": "V Cart",
        "id": 3,
        "icon": "cart-outline",
        "redirect_url": "#"
      },
    ]
    this.LmOpList = [
      {
        "name": "Settings",
        "id": 0,
        "icon": "settings-outline",
        "redirect_url": "#"
      },
    ]
  }

  ngOnInit() {

  }


  public LeftNavOpen(content: TemplateRef<any>) {
    this.offcanvasService.open(content, {
      ariaLabelledBy: 'offcanvas-basic-title', panelClass: 'v_LNOffCanvas_w',
    })
  }


}

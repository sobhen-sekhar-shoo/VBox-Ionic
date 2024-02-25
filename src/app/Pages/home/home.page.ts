import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TopNavComponent } from 'src/app/Components/top-nav/top-nav.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, TopNavComponent]
})
export class HomePage implements OnInit {
  constructor() {}
  public VideoSrc:any;

  ngOnInit(): void {

  }
  
}






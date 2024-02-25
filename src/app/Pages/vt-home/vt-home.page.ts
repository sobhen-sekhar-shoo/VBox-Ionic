import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-v-content',
  templateUrl: './vt-home.page.html',
  styleUrls: ['./vt-home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VtHomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

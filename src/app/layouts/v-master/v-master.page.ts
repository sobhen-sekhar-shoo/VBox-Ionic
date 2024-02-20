import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-v-master',
  templateUrl: './v-master.page.html',
  styleUrls: ['./v-master.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VMasterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {  VTopNavComponent} from 'src/app/Components/v-top-nav/v-top-nav.component';

@Component({
  selector: 'app-v-master',
  templateUrl: './vt-master.page.html',
  styleUrls: ['./vt-master.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, VTopNavComponent]
})
export class VtMasterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

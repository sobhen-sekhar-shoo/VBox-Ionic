import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class UploadPage implements OnInit {

  public Upload! : FormGroup;
  public UploadFile! : any;

  constructor(private _FormBuilder : FormBuilder) { }

  ngOnInit() {
    this.Upload = this._FormBuilder.group({"VFile" : [""]})
  }

  public FileSelect(e : any){
     this.UploadFile = e.target.files[0];
  }

  public UfSubmit() : void {

  }

}

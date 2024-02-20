import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage implements OnInit {
  constructor() {}
  public VideoSrc:any;

  ngOnInit(): void {
    debugger;
   // display(this, 'http://localhost:5000/public/videos/bigbuck.mp4');
    // display(this, 'http://localhost:5000/Api/V_1/TestVideo');
    //  let Videourl:any = null;
    // async function display(This: any, videoStream:any){
    //   let blob = await fetch(videoStream).then(r => r.blob());
    //   Videourl = createObjectURL(blob);
    //   This.VideoSrc = Videourl;
    // }
    // this.VideoSrc = Videourl;
    this.VideoSrc = "/assets/Videos/Motu_Patlu.mp4";
   // this.VideoSrc = "http://127.0.0.1:5501/public/videos/Motu_Patlu/Motu_Patlu.m3u8";
    // this.VideoSrc = "http://127.0.0.1:5501/public/videos/Motu_Patlu.mp4";
  }
  

  
}

function createObjectURL(object:any) {
  return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
}




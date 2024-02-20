import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import videojs from 'video.js';


@Component({
  selector: 'app-watch',
  templateUrl: './watch.page.html',
  styleUrls: ['./watch.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class WatchPage implements OnInit {
  public titel: string = "viewer";
  private Options!: Object;
  public Player: any;

  constructor() {
    this.Options = {
      autoplay: false,
      debug: false,
      fluid: false,
      keysystems: "",
      minified: false,
      muted: true,
      preload: "auto",
      sync_workers: false,
      responsive: true,
      playsinline: false,
      controls: true,
      sources: [
        {
          //src: '/assets/Videos/Motu_Patlu.mp4',
          src: 'http://127.0.0.1:5501/public/videos/Motu_Patlu/Motu_Patlu.m3u8',
          //type: 'video/mp4'
          type: 'application/x-mpegURL'
        }
      ],
      // plugins: {
      //   httpSourceSelector: {
      //     default: 'auto'
      //   }
      // },
      liveui: true,
      enableSourceset: true,
      html5: {
        vhs: {
          overrideNative: true,
          bufferBasedABR: false,
          llhls: true,
          exactManifestTimings: false,
          leastPixelDiffSelector: false,
          useNetworkInformationApi: false,
          useDtsForTimestampOffset: false,
          useForcedSubtitles: false
        }
      }
    }
  }

  ngOnInit() {

    this.Player = videojs("Viewer", this.Options, function onPlayerReady(this: any) {
      console.log('onPlayerReady', this);
    });
    (window as any).Player = this.Player;
  }

  ngOnDestroy() {
    if (this.Player) {
      this.Player.dispose();
    }
  }

}

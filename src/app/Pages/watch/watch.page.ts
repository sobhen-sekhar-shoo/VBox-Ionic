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
          src: '/assets/Videos/Motu_Patlu.mp4',
         // src: 'https://sobhen-test-bucket.s3.ap-south-1.amazonaws.com/Videos/bigbuck.mp4' +
        //  '?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiEAm1hKOArDETteSDIaRN1w%2FIrPqr7Ng%2F3ym3HXy4j4wXACIA4rEJRdkL8tueTDdH4i3ioUf8a6ZqS8vidu72p5HOxyKuQCCH4QARoMNTMxMjUwOTQzMzk4IgyCn6BS1fv9MGk5fMcqwQJoMmFWZ9s3FVHugyK7Mi1K%2Bz8MT2luGvdSMhPgaQ4rljU%2Boe2brGtqZ2bElvuHIPrllE5%2Fg1JVpyzsK9ujAGQyjAZRv9HQEsm%2FuXr1pjiix8aGcwcGTEVSil%2Bx2oRrU0IGnhmTn%2Fnn6mqB%2BdzuEf738dzWwGYb9IH%2BAp0vjdv%2B4QDiCS61T3p5dN0TdIGsjYJPM3NaUppGlFPkGwST0y7Xw5qs%2BlWgDsckPCvz9adlzThzhcP2qTi4TM7F%2FZR%2FyhyVcXQLFau2PGaTQT0n%2FpA6yu%2Bn%2FR9I43topzF3nGHNFAihZZLI0c29o55GRtl5aZvBYJT%2BP6d9oZ%2B4sGupSghYtzHgntEx3I%2FZ8qlCQdQDHK6GkLV9jJ9LhEXsNOERHp2doCaBfRsAxliAr5n1SduP7b%2FdtUxFtfgqgdNRwEHrQ%2FMww5bkrgY6swLEP16oN%2BHk8xBRlTWDIRMM4ORTKI9gBhqQvIlc2meKqXL7ZU5OiwmBP4cvreN8jJbpTYesFxhgOcwAVOwoPWo1XuFParP%2BZ2MNW%2Ba2VaspuZgCZz830WlFbdcwwhyuzkbNjspVIh%2FUd6ZryzV%2F%2FKmndkAChBz4cuZXWKPYQILJG9WK2TQyBzg82YXYfuo3Z%2F7yBYijSoUzmFF3cz%2BsMplsjmfXlb9ShVzoeWtO85MucPpdevFasjHxMZrQxZILjKcpJpCUiXGjs1tIIfCHAdx5m3SnD4agQhflyOwhGpa95ZIl6GT4ORTPThnBVc6vwOp6cb1iabg46ZBQme5yXpNq4aVifYx1J7qNoI6YZoN1ytP%2F%2FQUItByI%2BBL%2BFGqWTMge7rkNNNlpxox0c9STOR4zT4n5&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240223T215606Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXXMIGCWTOHB4CZZK%2F20240223%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=600dcb94f8ffef18ce7875c6d10b9ee2d089d2434a3834a4038ae92260f8acd0',
          //src: 'http://127.0.0.1:5501/public/videos/Motu_Patlu/Motu_Patlu.m3u8',
          // src: 'https://vod.api.video/vod/vi5beImZFzcSzwfflo1Ek6Es/hls/manifest.m3u8',
          type: 'video/mp4'
          //type: 'application/x-mpegURL'
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

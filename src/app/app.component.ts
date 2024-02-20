import { Component } from '@angular/core';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(public ngbConfig: NgbConfig) {

    // angular bootstrap global configuration //
    ngbConfig.animation = true;
    
  }
}

import { Component } from '@angular/core';
import { NgbConfig, NgbOffcanvas, NgbOffcanvasConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [NgbOffcanvasConfig, NgbOffcanvas],
})
export class AppComponent {

  constructor(
    public ngbConfig: NgbConfig,
    config: NgbOffcanvasConfig,
    public offcanvasService: NgbOffcanvas,

  ) {

    // angular bootstrap global configuration //
    ngbConfig.animation = true;

    // >>====================================>><<================================<<
    // customize default values of offcanvas used by this component tree

    config.position = 'start';
    //config.backdropClass = 'bg-info';
    config.keyboard = true;

    // >>====================================>><<================================<<

  }
}

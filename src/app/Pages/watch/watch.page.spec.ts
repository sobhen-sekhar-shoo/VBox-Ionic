import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WatchPage } from './watch.page';

describe('WatchPage', () => {
  let component: WatchPage;
  let fixture: ComponentFixture<WatchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VtHomePage } from './vt-home.page';

describe('VtHomePage', () => {
  let component: VtHomePage;
  let fixture: ComponentFixture<VtHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VtHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

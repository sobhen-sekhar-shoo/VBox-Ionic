import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VMasterPage } from './vt-master.page';

describe('VMasterPage', () => {
  let component: VMasterPage;
  let fixture: ComponentFixture<VMasterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VMasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

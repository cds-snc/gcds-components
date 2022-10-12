import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcdsComponentsComponent } from './gcds-components.component';

describe('GcdsComponentsComponent', () => {
  let component: GcdsComponentsComponent;
  let fixture: ComponentFixture<GcdsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcdsComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcdsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

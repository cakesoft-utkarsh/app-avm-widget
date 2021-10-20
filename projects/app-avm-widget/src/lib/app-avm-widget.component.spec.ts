import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAvmWidgetComponent } from './app-avm-widget.component';

describe('AppAvmWidgetComponent', () => {
  let component: AppAvmWidgetComponent;
  let fixture: ComponentFixture<AppAvmWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAvmWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAvmWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

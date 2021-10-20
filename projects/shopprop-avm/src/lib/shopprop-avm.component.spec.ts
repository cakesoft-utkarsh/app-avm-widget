import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppropAVMComponent } from './shopprop-avm.component';

describe('ShoppropAVMComponent', () => {
  let component: ShoppropAVMComponent;
  let fixture: ComponentFixture<ShoppropAVMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppropAVMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppropAVMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

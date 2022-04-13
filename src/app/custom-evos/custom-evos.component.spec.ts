import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEvosComponent } from './custom-evos.component';

describe('CustomEvosComponent', () => {
  let component: CustomEvosComponent;
  let fixture: ComponentFixture<CustomEvosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomEvosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEvosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

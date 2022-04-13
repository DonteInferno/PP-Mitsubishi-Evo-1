import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpLogInComponent } from './sign-up-log-in.component';

describe('SignUpLogInComponent', () => {
  let component: SignUpLogInComponent;
  let fixture: ComponentFixture<SignUpLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpLogInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

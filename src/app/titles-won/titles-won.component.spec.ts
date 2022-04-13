import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesWonComponent } from './titles-won.component';

describe('TitlesWonComponent', () => {
  let component: TitlesWonComponent;
  let fixture: ComponentFixture<TitlesWonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlesWonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlesWonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

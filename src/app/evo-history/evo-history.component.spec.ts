import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoHistoryComponent } from './evo-history.component';

describe('EvoHistoryComponent', () => {
  let component: EvoHistoryComponent;
  let fixture: ComponentFixture<EvoHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvoHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRankComponent } from './all-rank.component';

describe('AllRankComponent', () => {
  let component: AllRankComponent;
  let fixture: ComponentFixture<AllRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

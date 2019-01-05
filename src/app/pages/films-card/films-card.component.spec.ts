import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsCardComponent } from './films-card.component';

describe('FilmsCardComponent', () => {
  let component: FilmsCardComponent;
  let fixture: ComponentFixture<FilmsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

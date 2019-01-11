import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { USBoxComponent } from './usbox.component';

describe('USBoxComponent', () => {
  let component: USBoxComponent;
  let fixture: ComponentFixture<USBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ USBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(USBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsboxListComponent } from './usbox-list.component';

describe('UsboxListComponent', () => {
  let component: UsboxListComponent;
  let fixture: ComponentFixture<UsboxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsboxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsboxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

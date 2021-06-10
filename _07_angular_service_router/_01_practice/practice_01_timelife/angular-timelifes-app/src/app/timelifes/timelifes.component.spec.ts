import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelifesComponent } from './timelifes.component';

describe('TimelifesComponent', () => {
  let component: TimelifesComponent;
  let fixture: ComponentFixture<TimelifesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelifesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelifesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

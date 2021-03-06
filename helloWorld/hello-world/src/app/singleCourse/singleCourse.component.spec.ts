import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCourseComponent } from './singleCourse.component';

describe('SingleCourseComponent', () => {
  let component: SingleCourseComponent;
  let fixture: ComponentFixture<SingleCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

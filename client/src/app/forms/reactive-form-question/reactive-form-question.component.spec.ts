import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormQuestionComponent } from './reactive-form-question.component';

describe('ReactiveFormQuestionComponent', () => {
  let component: ReactiveFormQuestionComponent;
  let fixture: ComponentFixture<ReactiveFormQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

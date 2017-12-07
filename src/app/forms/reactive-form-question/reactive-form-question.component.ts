import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from "../../model/question-base";

@Component({
  selector: 'app-reactive-form-question',
  templateUrl: './reactive-form-question.component.html',
  styleUrls: ['./reactive-form-question.component.css']
})
export class ReactiveFormQuestionComponent implements OnInit {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid(){return this.form.controls[this.question.key].valid}

  constructor() { }

  ngOnInit() {
  }

}

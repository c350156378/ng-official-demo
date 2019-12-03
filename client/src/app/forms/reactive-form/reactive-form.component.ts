import { Component, OnInit, Input } from '@angular/core';

import { FormGroup } from "@angular/forms";

import { QuestionBase }              from '../../model/question-base';
import { QuestionControlService }    from '../../service/question-control.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  providers:[QuestionControlService]
})
export class ReactiveFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form:FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    
  }

  onSubmit(){
    this.payLoad = JSON.stringify(this.form.value);
  }

}

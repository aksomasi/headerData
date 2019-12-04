import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SurveyQuestion } from '../../Survey.modal';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.scss']
})
export class SingleQuestionComponent implements OnInit {

  @Input() currentQuestion: SurveyQuestion;
  @Output() selectableAnswer: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  next(value) {
    this.selectableAnswer.emit(value);
  }
}

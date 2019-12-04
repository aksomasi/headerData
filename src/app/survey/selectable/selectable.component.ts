import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SurveyQuestion } from '../../Survey.modal';

@Component({
  selector: 'app-selectable',
  templateUrl: './selectable.component.html',
  styleUrls: [ './selectable.component.scss' ],
})
export class SelectableComponent implements OnInit {

  @Input() currentQuestion: SurveyQuestion;
  @Output() selectableAnswer: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
  }

  ngOnInit() {

// Split in group of 3 items
  }

  next(value) {
    this.selectableAnswer.emit({ question: this.currentQuestion.questionReferenceId, answer: value });
  }


  getLeftData() {
    return this.currentQuestion.surveyQuestionAnswers.slice(0, Math.floor(this.currentQuestion.surveyQuestionAnswers.length / 2));
  }

  getRightData() {
    return this.currentQuestion.surveyQuestionAnswers.slice(Math.floor(this.currentQuestion.surveyQuestionAnswers.length / 2), Math.floor(this.currentQuestion.surveyQuestionAnswers.length / 2) + this.currentQuestion.surveyQuestionAnswers.length);

  }
}


import { Component, Input, OnInit } from '@angular/core';
import { SurveyQuestion } from '../../Survey.modal';

@Component({
  selector: 'app-multiple-question',
  templateUrl: './multiple-question.component.html',
  styleUrls: ['./multiple-question.component.scss']
})
export class MultipleQuestionComponent implements OnInit {

  @Input() currentQuestion: SurveyQuestion[];

  constructor() { }

  ngOnInit() {
  }

}

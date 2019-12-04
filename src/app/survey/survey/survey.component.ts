import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../survey.service';
import { Observable } from 'rxjs';
import { Survey, SurveyPage, SurveyQuestion } from '../../Survey.modal';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: [ './survey.component.scss' ],
})
export class SurveyComponent implements OnInit {

  currentQuestion: SurveyQuestion[];
  surveyPages: SurveyPage[];
  surveyPageName: string;
  currentQuestionName: string;
  habbitName: string;
  selectedIndex: number;
  total: number;
  constructor(private survey: SurveyService, private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.surveyPageName = params.get('categoryName');  // lifestyle
      this.habbitName = params.get('habbitName'); // smoking
      this.selectedIndex = 1;
      this.fetchData();
    });
  }

  ngOnInit() {

  }

  fetchData() {
    this.survey.getSurveyData().subscribe(value => {
      this.surveyPages = value.filter(y => (y.name).toLowerCase() === this.surveyPageName)[ 0 ].surveyPages;
      this.total = this.surveyPages.length;
      const questions = this.surveyPages.filter(y => (y.surveyPageReferenceId).split(':').slice(-1)[ 0 ] === this.habbitName)[ 0 ];
      this.currentQuestionName = questions.surveyPageReferenceId;
      this.currentQuestion = questions.surveyQuestions;
    });
  }

  next(val) {
    let url = '';
    if (val.answer === 'stillSmoke') {
      url = 'survey:lifestyle:smokeFree';
    } else if (val.answer === 'usedToSmoke') {
      url = 'survey:lifestyle:cigarettes';
    } else {
      url = val.question;
    }
    this.router.navigateByUrl(url.replace(/:/g, '/'));
  }

  nextTo() {
    ++this.selectedIndex;
    console.log(this.surveyPages[this.selectedIndex]);
  }

  prevTo() {
    --this.selectedIndex;
    console.log(this.surveyPages[this.selectedIndex]);
  }
}

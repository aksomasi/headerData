import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyComponent } from './survey/survey.component';
import { RouterModule } from '@angular/router';
import { SurveyHeaderComponent } from './survey-header/survey-header.component';
import { SingleQuestionComponent } from './single-question/single-question.component';
import { MultipleQuestionComponent } from './multiple-question/multiple-question.component';
import { SelectableComponent } from './selectable/selectable.component';
import { SurveyFooterComponent } from './survey-footer/survey-footer.component';
import { ProgressbarModule } from 'ngx-bootstrap';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [SurveyComponent, SelectableComponent, SurveyHeaderComponent, SingleQuestionComponent, MultipleQuestionComponent, SurveyFooterComponent],
  imports: [
    CommonModule,
    ProgressbarModule.forRoot(),
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          { path: '', component: SurveyComponent },
         // { path: ':categoryName', component: SurveyComponent },
          { path: ':categoryName/:habbitName', component: SurveyComponent },
        ]

      }
    ], ),
  ]
})
export class SurveyModule { }

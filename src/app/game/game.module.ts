import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { RouterModule } from '@angular/router';
import { SurveyComponent } from '../survey/survey/survey.component';



@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          { path: '', component: GameComponent },
        ]

      }
    ]),
  ]
})
export class GameModule { }

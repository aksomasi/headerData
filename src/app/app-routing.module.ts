import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'survey',
  loadChildren: () =>
    import('src/app/survey/survey.module').then(
      module => {
        return module.SurveyModule;
      }
    ),
},
  {
    path: '',
    loadChildren: () =>
      import('src/app/game/game.module').then(
        module => {
          return module.GameModule;
        }
      ),
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

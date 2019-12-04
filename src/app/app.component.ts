import { Component } from '@angular/core';
import { PlayerLimitControlNames, stateEnum } from './Survey.modal';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Jest-Practise';
  readonly playerLimitControlNames: typeof PlayerLimitControlNames = PlayerLimitControlNames ;
  constructor(private translateService: TranslateService){
    this.translateService.addLangs(['ap_en']);
    this.translateService.setDefaultLang('ap_en');
  }

  next(val) {
    alert(val);
  }
}

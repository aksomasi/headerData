import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Survey } from './Survey.modal';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class SurveyService {

  constructor(private http: HttpClient) {
  }

  getSurveyData(): Observable<Survey[]> {
    return this.http.get<Survey[]>('./assets/survey.json');
  }
}

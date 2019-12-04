export interface Survey {
  categoryId: number;
  name: string;
  imageCssClass: string;
  surveyPages: SurveyPage[];
}

export interface SurveyPage {
  pageId?: number;
  surveyPageReferenceId: string;
  imageCssClass: string;
  animatedImageCssClass: string;
  hasAnimatedView: boolean;
  displayOrder: number;
  clientRestrictions: ClientRestriction[];
  surveyQuestions: SurveyQuestion[];
  PageId?: number;
}

export interface SurveyQuestion {
  id: number;
  questionReferenceId: string;
  displayOrder: number;
  answerDisplayCode: number;
  surveyQuestionAnswers: SurveyQuestionAnswer[];
  gender?: string;
}

export interface SurveyQuestionAnswer {
  id: number;
  value?: string;
  displayIdkModal?: boolean;
  dataType: number;
  displayOrder: number;
  followUpQuestionIdentifiers: any[];
  validationRules: number[][];
  dispalyIdkModal?: boolean;
}

export interface ClientRestriction {
  clientId: string;
  accountNumbers: any[];
}




export enum PlayerLimitControlNames {
  LIVE_GAMES_BUY_IN_LIMIT_PER_DAY = 'LIVE_GAMES_BUY_IN_LIMIT_PER_DAY',
  LIVE_GAMES_BUY_IN_LIMIT_PER_CALENDAR_MONTH = 'LIVE_GAMES_BUY_IN_LIMIT_PER_CALENDAR_MONTH',
  LOGIN_TIME_PER_DAY = 'LOGIN_TIME_PER_DAY',
  NUMBER_OF_LOGINS_PER_CALENDAR_MONTH = 'NUMBER_OF_LOGINS_PER_CALENDAR_MONTH',
  LIVE_GAMES_NET_LOSS_PER_DAY = 'LIVE_GAMES_NET_LOSS_PER_DAY',
  LIVE_GAMES_NET_LOSS_PER_CALENDAR_MONTH = 'LIVE_GAMES_NET_LOSS_PER_CALENDAR_MONTH'
}

export enum stateEnum {
  'DOING' = 0,
  'DONE' = 1,
  'FAILED' = -1
}

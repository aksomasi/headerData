import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-survey-header',
  templateUrl: './survey-header.component.html',
  styleUrls: [ './survey-header.component.scss' ],
})
export class SurveyHeaderComponent implements OnInit, OnChanges {

  @Input() question: string;
  @Input() iconImage: string;
  msgContent;
  msgTitle;
  reason: string;
  instruction: string;

  constructor(public dialog: MatDialog,
              private translate: TranslateService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.question) {
      const reason = this.question.replace(/\:/gi, '.') + '.reason.title';
      const instruction = this.question.replace(/\:/gi, '.') + '.instruction';
      this.translate.get(reason).subscribe(translatedReason => {
        if (reason !== translatedReason) {
          this.reason = translatedReason;
        }
      });
      this.translate.get(instruction).subscribe(translatedInstruction => {
        if (instruction !== translatedInstruction) {
          this.instruction = translatedInstruction;
        }
      });
    }
  }


  getQuestionLabel(value) {
    if (value) {
      return value.replace(/\:/gi, '.') + '.question';
    }
  }


  openOverlay() {
    const dialogRef = this.dialog.open(OverlayComponent,
      {
        data: { msgcontent: this.msgContent, msgtitle: this.msgTitle },
        panelClass: 'custom-dialog-container',
      },
    );

    dialogRef.afterClosed().subscribe(result => {

      console.log(`Dialog result: ${ result }`);

    });
  }

  reasons() {
    const description = this.question.replace(/\:/gi, '.') + '.reason.description';
    this.translate.get(description).subscribe(translatedDescription => {
      this.msgContent = translatedDescription;
    });
    this.msgTitle = this.reason;
    this.openOverlay();
  }


}

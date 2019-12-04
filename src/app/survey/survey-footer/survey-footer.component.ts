import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-survey-footer',
  templateUrl: './survey-footer.component.html',
  styleUrls: [ './survey-footer.component.scss' ],
})
export class SurveyFooterComponent implements OnInit , AfterViewInit {

  @Input() dynamic: string;
  @Input() max: string;
  @Output() next: EventEmitter<any> = new EventEmitter<any>();
  @Output() prev: EventEmitter<any> = new EventEmitter<any>();

  // @ts-ignore
  @ViewChild('footer') divView: ElementRef;

  // max = 4;
  showWarning: boolean;
 // dynamic: number;
  count = 0;
  type: string;

  constructor() {
   // this.dynamic = 0;
  }

  nextTo() {
    this.next.emit({});
  //  this.divView.nativeElement.innerHTML = this.divView.nativeElement.innerHTML.replace(`</progressbar>`, `<img src="https://rukminim1.flixcart.com/flap/150/150/image/6e6beb0ab04a77f2.jpg?q=70"/></progressbar>`)

  }

  prevTo() {
    this.prev.emit({});
   // this.divView.nativeElement.innerHTML = this.divView.nativeElement.innerHTML.replace(`</progressbar>`, `<img src="https://rukminim1.flixcart.com/flap/150/150/image/6e6beb0ab04a77f2.jpg?q=70"/></progressbar>`)

  }
  random(): void {
  }

  ngOnInit(): void {
   // this.divView.nativeElement.innerHTML = this.divView.nativeElement.innerHTML.replace(`</bar>`, `</bar><img src="https://rukminim1.flixcart.com/flap/150/150/image/6e6beb0ab04a77f2.jpg?q=70"/>`)

  }

  ngAfterViewInit(){

    console.log(this.divView);
   // this.divView.nativeElement.innerHTML = this.divView.nativeElement.innerHTML.replace(`</progressbar>`, `<img src="https://rukminim1.flixcart.com/flap/150/150/image/6e6beb0ab04a77f2.jpg?q=70"/></progressbar>`)
    ;

  }
}

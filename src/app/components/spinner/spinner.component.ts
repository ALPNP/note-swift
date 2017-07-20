import {Component, Input, AfterViewInit, ElementRef} from '@angular/core';


@Component({
    selector: 'spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class Spinner implements AfterViewInit {
    @Input() strokeWidth: string;
    @Input() width: string;
    @Input() height: string;

    spinnerElement: any;

    constructor(private el: ElementRef) {

    }

    ngAfterViewInit() {
        this.spinnerElement = this.el.nativeElement.querySelector('.spinner');
        this.setSpinnerWidth(this.width, this.height);
    }

    setSpinnerWidth(width: string, height: string): void {
        this.spinnerElement.style.width = width;
        this.spinnerElement.style.height = height;
    }
}

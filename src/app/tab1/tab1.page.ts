import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    private quoteForm: FormGroup;

    constructor() {
        this.quoteForm = new FormGroup({
            business: new FormControl('', [Validators.required]),
            date: new FormControl('', [Validators.required]),
            detail1: new FormControl('', [Validators.required]),
            time1: new FormControl('', [Validators.required]),
            price1: new FormControl('', [Validators.required]),
            tax: new FormControl('', [Validators.required]),
            projectDescription: new FormControl('', [Validators.required]),
            terms: new FormControl('', [Validators.required]),
            initial: new FormControl('', [Validators.required])
        });

    }

    addDetail() {
        alert('agregamos nuevo detalle');
    }
}

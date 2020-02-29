import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {validate} from "codelyzer/walkerFactory/walkerFn";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private billForm: FormGroup;

  constructor() {
    this.billForm = new FormGroup({
      dateCreate: new FormControl('', [Validators.required]),

      nameBusiness: new FormControl('', [Validators.required]),
      activityBusiness: new FormControl('', [Validators.required]),
      addressBusiness: new FormControl('', [Validators.required]),
      phoneBusiness: new FormControl('',[Validators.required]),

      activityCustomer: new FormControl('', [Validators.required]),
      taxId: new FormControl('', [Validators.required]),
      detail: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
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

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing-info-unnested',
  templateUrl: './billing-info-unnested.component.html',
  styleUrls: ['./billing-info-unnested.component.scss']
})
export class BillingInfoUnnestedComponent implements OnInit {

  public nestedForm: FormGroup = new FormGroup({
    basicInfo: new FormControl(""),
    address: new FormControl("")
  });

  public code = `
  public nestedForm: FormGroup = new FormGroup({
    basicInfo: new FormControl(""),
    address: new FormControl("")
  });
  `;

  public codeBasicInfo = `
import { Component, forwardRef, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicInfoComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => BasicInfoComponent),
      multi: true
    }
  ]
})
export class BasicInfoComponent implements OnInit {

  public basicInfoForm: FormGroup = new FormGroup({
    fname: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.basicInfoForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log("on change");
    this.basicInfoForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.basicInfoForm.disable() : this.basicInfoForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    console.log("Basic Info validation", c);
    return this.basicInfoForm.valid ? null : { invalidForm: {valid: false, message: "basicInfoForm fields are invalid"}};
  }

}
`;

public codeAddressInfo = `
import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressInfoComponent),
      multi: true
    }
  ]
})
export class AddressInfoComponent implements OnInit, ControlValueAccessor {

  public addressForm: FormGroup = new FormGroup({
    addressLine: new FormControl("", [Validators.required]),
    areacode: new FormControl('', [Validators.required, Validators.maxLength(5)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    val && this.addressForm.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    console.log("on change");
    this.addressForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    console.log("on blur");
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.addressForm.disable() : this.addressForm.enable();
  }

}

`;

  constructor() { }

  ngOnInit(): void {
  }


  public onSubmit() {
    //
    console.log("Billing Form ", this.nestedForm.value);
  }


}

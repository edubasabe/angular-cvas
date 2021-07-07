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

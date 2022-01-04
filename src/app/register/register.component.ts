import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent implements OnInit {

  public myForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  get movie() {
    return this.myForm.controls;
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      type: ['', Validators.required],
      date: ['', [Validators.required, Validators.min(1900), Validators.max(2022)]],
      bio: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.myForm.valid) {
      return;
    }
    console.log('New movie registered: ', this.myForm.value);
  }

  /* minDateValidator(minDate: Date): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      const date = new Date(control.value);
      const minDate = 1900;

      if ( date.getTime() < minDate ) {
        return null;
      } else {
        return { 'min': { value: control.value, expected: minDate }};
      }
    }
  };*/
}

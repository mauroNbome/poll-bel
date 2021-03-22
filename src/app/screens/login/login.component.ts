import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router) {}

  formController: any;
  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formController = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get emailNoValido() {
    return (
      this.formController.get('email').invalid &&
      this.formController.get('email').touched
    );
  }

  get passNoValido() {
    return (
      this.formController.get('password').invalid &&
      this.formController.get('password').touched
    );
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  acceder() {
    console.log(this.formController.value);

    if (this.formController.invalid) {
      this.markFormGroupTouched(this.formController);
    }

    this.router.navigate(['home']);
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent implements OnInit {
  loginForm: FormGroup = this._fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  isRequest: boolean = false;
  constructor(
    private readonly _fb: FormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  submit(): void {
    this.isRequest = true;
    console.log('[SUBMIT FN] form valid?:', this.loginForm.valid);
    console.log('[SUBMIT FN] form:', this.loginForm.value);

    setTimeout(() => {
      this.isRequest = false;
      this.router.navigate(['admin']);
    }, 3000);
  }
}

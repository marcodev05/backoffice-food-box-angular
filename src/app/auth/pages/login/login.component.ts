import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../../shared/models/LoginRequest';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({});
  public errorMsg: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmitForm(): void {
    const formValue = this.loginForm.value;
    const loginRequest = new LoginRequest();
    loginRequest.email = formValue["email"];
    loginRequest.password = formValue["password"];
    if (this.loginForm.valid) {
      this.authService.login(loginRequest).subscribe(
        data => {
          this.router.navigate(['/'], );
        },
        error => {
          this.errorMsg = "Invalid email ou password!";
        }
      );
    }
  }

}

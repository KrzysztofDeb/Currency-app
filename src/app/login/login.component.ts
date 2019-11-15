import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) {}

  public ngOnInit(): void {
    this.createForm();
  }

  public onSubmit(): void {
    if (this.form.valid) {
      sessionStorage.setItem('user', this.form.get('user').value);
      sessionStorage.setItem('pass', this.form.get('pass').value);
      this.router.navigate(['/features']);
    }
  }

  private createForm(): void {
    this.form = this.fb.group({
      user: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, Org } from '../../interfaces/interfaces';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isUser = true;
  user: User = {
    name: '',
    email: '',
    birthdate: '',
    dpi: '',
    password: '',
  };

  org: Org = {
    name: '',
    email: '',
    password: '',
    description: '',
  };
  password2;
  constructor() {}
  ngOnInit() {}
  onSubmit(formulario: NgForm) {
    console.log(this.isUser);
    // this.authService.register(form.value).subscribe((res) => {
    //   this.router.navigateByUrl('home');
    // });
  }
}

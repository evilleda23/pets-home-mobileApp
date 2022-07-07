import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FederateComponent } from './federate/federate.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, FederateComponent],
  exports: [LoginComponent, RegisterComponent],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class AuthModule {}

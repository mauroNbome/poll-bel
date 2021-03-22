import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, HomeComponent, EncuestasComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [LoginComponent, HomeComponent, EncuestasComponent],
})
export class ScreensModule {}

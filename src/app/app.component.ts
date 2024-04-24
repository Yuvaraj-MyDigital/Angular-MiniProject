import { Component  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from "./components/users/register/register.component";
import { SetPasswordComponent } from "./components/users/set-password/set-password.component";
import { HeaderComponent } from "./components/users/header/header.component";
import {  HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [],
    imports: [
      RouterOutlet,
      RegisterComponent,
      SetPasswordComponent,
      HttpClientModule
    ]
})
export class AppComponent {
  title = 'Angular-MiniProject';
}

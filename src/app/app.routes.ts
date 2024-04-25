import { Routes } from '@angular/router';
import { RegisterComponent } from './components/users/register/register.component';
import { SetPasswordComponent } from './components/users/set-password/set-password.component';
import { LoginComponent } from './components/users/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: "register", pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'set-password/:token', component: SetPasswordComponent },
    { path: '**', component: RegisterComponent }

];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//modules
import { PagesRoutingModule } from './pages/pages.routing';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';



const router: Routes = [



  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(router),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

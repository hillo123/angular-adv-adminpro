import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//modules
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';




const router: Routes = [

  { path: '**', component: NopagefoundComponent }

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(router),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

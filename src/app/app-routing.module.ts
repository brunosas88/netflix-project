import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Frame1Component } from './frame1/frame1.component';
import { Frame2Component } from './frame2/frame2.component';

const routes: Routes = [
	{ path: 'home', component: Frame1Component, },
	{ path: 'login', component: Frame2Component },
	// { path: 'user', component: Frame4Component },
	{ path: '',   redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

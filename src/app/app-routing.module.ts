import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Frame2Component } from './frame2/frame2.component';

const routes: Routes = [
	// { path: 'home', component:}
	{ path: 'login', component: Frame2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

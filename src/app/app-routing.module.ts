import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { Frame2Component } from './frame2/frame2.component';

const routes: Routes = [
	{ path: 'home', component: HomePageComponent },
	{ path: 'login', component: Frame2Component },
	// { path: 'user', component: Frame4Component },
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

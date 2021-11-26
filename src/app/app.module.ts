import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowModalComponent } from './Show-Modal/show-modal.component';
import { ModalServerComponent } from './modal-server/modal-server.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
	declarations: [AppComponent, ShowModalComponent, ModalServerComponent],
	imports: [BrowserModule, AppRoutingModule, ModalModule.forRoot()],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

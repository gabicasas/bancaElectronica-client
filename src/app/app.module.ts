import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FujitsuRequesterService } from './services/fujitsu-requester.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { FinanzasComponent } from './finanzas/finanzas.component';

const appRoutes: Routes = [
  { path: 'logout', component: LogoutComponent },
  { path: 'finanzas', component: FinanzasComponent }
 ];


@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    FinanzasComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [FujitsuRequesterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FujitsuRequesterService } from './services/fujitsu-requester.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { FinanzasComponent } from './finanzas/finanzas.component';
import { DemoMaterialModule } from './util/demo.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BccDatatableComponent } from './components/bcc-datatable/bcc-datatable.component';
import { BccLabelComponent } from './components/bcc-label/bcc-label.component';
import { UserLoguedComponent } from './user-logued/user-logued.component';
import { BccAbstractComponent } from './components/bcc-abstract/bcc-abstract.component';


// this.constructor.name para sacar el nombre de la clase para hacer el path
const appRoutes: Routes = [
  { path: 'logout', component: LogoutComponent },
  { path: 'finanzas', component: FinanzasComponent }
 ];


@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    FinanzasComponent,
    BccDatatableComponent,
    BccLabelComponent,
    UserLoguedComponent,
    BccAbstractComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    DemoMaterialModule, // Tiene que ir despues de BrowserModule
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [FujitsuRequesterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

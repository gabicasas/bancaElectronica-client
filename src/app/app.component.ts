import { Component } from '@angular/core';
import { FujitsuRequesterService } from './services/fujitsu-requester.service';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor(private requester: FujitsuRequesterService) {
   }


  clickBoton() {

    const body = new URLSearchParams();
    body.set('username', 'username');
    body.set('password', 'password');
    this.requester.request(body);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class FujitsuRequesterService {


  private endpoint = '/bancaElectronica';
  constructor(private http: HttpClient) { }


/*let body = new URLSearchParams();
body.set('username', username);
body.set('password', password);*/

  public request(body: URLSearchParams) {
     this.http.post(this.endpoint, body).subscribe((data: any) => {
      console.log(data);
    });
  }
}

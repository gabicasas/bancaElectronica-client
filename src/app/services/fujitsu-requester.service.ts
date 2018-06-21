import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { FlowNode } from '../model/flow-node.model';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class FujitsuRequesterService {


  private endpoint = '/ServletOperation';

  private data: any = null;
  constructor(private http: HttpClient) { }

  public getData() {
    return this.data;
  }

/*let body = new URLSearchParams();
body.set('username', username);
body.set('password', password);*/

  public request(body: URLSearchParams) {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
     this.http.post(this.endpoint, body.toString(), {headers: myheader}).subscribe((data: FlowNode) => {
      console.log(data);

    });
  }
}

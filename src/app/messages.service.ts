import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Injectable()
export class MessageService {
  private apiUrl = 'http://localhost:4201/api/v1/dweets';
  constructor(private http: Http) { }

  get(): Observable<Response> {
    return this.http.get(this.apiUrl)
    .map((res:Response) => res.json());
  }

  onMessagesRetrieved(callback: any): void {
  	this.get().subscribe(callback);
  }
}

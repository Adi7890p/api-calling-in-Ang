import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Postdata } from '../postdata';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getLocalData() {
    return ['hello', 'world'];
  }

  getPublicData():Observable<Postdata[]>{
    return this.http.get<Postdata[]>("https://jsonplaceholder.typicode.com/posts");
  }
}

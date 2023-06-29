import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlApi = "http://127.0.0.1:8000/api/v1/"

  constructor(private http: HttpClient) { }



  getRequest(endpoint: string){
    return this.http.get(this.urlApi + endpoint);
  }

  postRequest(endpoint: string, body: object){
    return this.http.post(this.urlApi + endpoint, body);
  }


}

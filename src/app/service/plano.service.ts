import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {


  apiUrl: string;
  itemSelected: any;
  orderSelected: any;

  constructor(
    private http: HttpClient) {
    this.apiUrl = `http://private-59658d-celulardireto2017.apiary-mock.com/planos/`;
  }

  getPlanoWF(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/WF03/`);
  }
  getPlanoCPT(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/CPT02/`);
  }
  getPlanoTBT(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/TBT01/`);
  }

}

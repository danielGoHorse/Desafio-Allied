import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlataformaService {


    apiUrl: string;
    itemSelected: any;
    orderSelected: any;

    constructor(
        private http: HttpClient) {
        this.apiUrl = `http://private-59658d-celulardireto2017.apiary-mock.com/`;
    }

    getPlataformas(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/plataformas`);
      }

}

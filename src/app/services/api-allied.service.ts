import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiAlliedService {
  apiUrl: string;
  itemSelected: any;
  orderSelected: any;
  plataformaToEdit: any;
  planoToEdit: any;
  formUser: any;


  constructor(private http: HttpClient) {
    this.apiUrl = `https://private-59658d-celulardireto2017.apiary-mock.com/planos`;
  }

  listarPlataformas(): Observable<any> {
    return this.http.get("https://private-59658d-celulardireto2017.apiary-mock.com/plataformas");
  }

  getPlanoWF(): Observable<any> {
    return this.http.get(`${this.apiUrl}/WF03`);
  }
  getPlanoCPT(): Observable<any> {
    return this.http.get(`${this.apiUrl}/CPT02`);
  }
  getPlanoTBT(): Observable<any> {
    return this.http.get(`${this.apiUrl}/TBT01`);
  }

  selectPlataforma(plataforma: any) {
    this.plataformaToEdit = plataforma;
  }
  sendForm(form: any) {
    this.formUser = form;
  }

  public getForm(): any {
    return this.formUser;
  }

  public getToPlataforma(): any {
    return this.plataformaToEdit;
  }

  selectPlano(planoSelecionado: any) {
    this.planoToEdit = planoSelecionado;
  }

  public getToPlano(): any {
    return this.planoToEdit;
  }

}

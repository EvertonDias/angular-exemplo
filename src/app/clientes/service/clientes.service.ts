import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cliente } from "../model/cliente";
import { Observable } from "rxjs";

const url = "http://localhost:8080/clientes/";

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  constructor(public http: HttpClient) {}

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${url}findAll`);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(`${url}delete/?id=${id}`);
  }

  update(cliente: Cliente): Observable<any> {
    return this.http.put<Cliente>(`${url}update`, cliente);
  }
}

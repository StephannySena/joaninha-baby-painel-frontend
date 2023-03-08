import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadastro } from '../interface/cadastro.interface';

@Injectable({
    providedIn: 'root'
  })
  export class CadastrosService {
    private url = "http://localhost:8080/"

    constructor(private httpClient: HttpClient) {}

    public getAllCadastros(): Observable<Array<Cadastro>>{        
        return this.httpClient.get<Array<Cadastro>>(this.url + "cadastros");
    }

  }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface DbForm {
  name: string,
  form: {}
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  url = 'https://babyhaviland-279f.restdb.io/rest/baby-shower-form'
  httpHeaders = new HttpHeaders({ 
    'cache-control': 'no-cache',
    'x-apikey': '601f21253f9eb665a1689201' 
  })

  constructor(private http: HttpClient) { }

  postForm(formBody: DbForm) {
    console.log(formBody)
    return this.http.post(this.url, formBody, { headers: this.httpHeaders})
  }
}

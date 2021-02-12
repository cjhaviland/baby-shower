import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  getForms() {
    return this.http.get(this.url, { headers: this.httpHeaders })
  }

  postForm(formBody: GameForm) {
    console.log(formBody)
    return this.http.post(this.url, formBody, { headers: this.httpHeaders})
  }
}

export interface GameForm {
  name: string
  babyPotion: {
    mamaScoop: string
    papaScoop: string
    ollieScoop: string
    yield: {
      weight: string
      length: string
    }
  }
    birthDate: Date  
  guessingGame: {
    frozenInLab: string
    yearsToConceive: string
    lostWeight: string
    threwUp: string
    nausea: string
    startedShowing: string
    glucoseScreening: string
    globalPandemic: string
    turnedThirty: string
    acidReflux: string
    mostUltrasounds: string
  }
  phoneNumber: string
}

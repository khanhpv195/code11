import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/fromPromise';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  async getSearch() {
    const url = 'https://api.pokemontcg.io/v1/cards?pages=1&pageSize=10';
    try {
      const res = await this.http.get(url)
        .toPromise();
      const resJson = res;
      return resJson;
    } catch (err) {
      return console.log(err);
    }
  }
}

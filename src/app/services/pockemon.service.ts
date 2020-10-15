import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pockemon } from 'src/app/components/pockemon-details/pockemon.model';

@Injectable({
  providedIn: 'root',
})
export class PockemonService {
  constructor(private http: HttpClient) {}

  getPockemons(url: string): Observable<any> {
    return this.http.get(url);
  }

  getPockemonDetails(url: string): Observable<any> {
    return this.http.get(`${url}`);
  }

  getPockemonType(id: number): Observable<any> {
    return this.http.get(`http://pokeapi.co/api/v2/type/${id}/`);
  }
}

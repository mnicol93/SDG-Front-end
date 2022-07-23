import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GetService {
  private URL: string = environment.url;

  constructor(private httpClient: HttpClient) { }

  getComarcas(){
    return this.httpClient.get(this.URL);
  }
}

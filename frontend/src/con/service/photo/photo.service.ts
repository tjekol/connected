import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ok } from 'assert';
import { Observable } from 'rxjs';
import { env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  private url = 'https://api.unsplash.com/photos';
  private client_id = env.clientId;

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}?client_id=${this.client_id}`);
  }
}

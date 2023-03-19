import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_URLS } from 'src/app/core';
import { environment } from 'src/environments/environment.development';
import { Client } from './client.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private clientsList$: BehaviorSubject<Client[]> = new BehaviorSubject<
    Client[]
  >([]);
  private clientsApiUrl =
    environment.server_url + API_URLS.AppApi + API_URLS.Clients;

  constructor(private http: HttpClient) {
    this.getClientList().subscribe((clients) => {
      this.clientsList$.next(clients);
    });
  }

  getClientList(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsApiUrl);
  }

  getClientsList$(): Observable<Client[]> {
    return this.clientsList$.asObservable();
  }

  deleteClient(id: string) {
    return this.http.delete(`${this.clientsApiUrl}${id}/`);
  }

  //use this method to update clientsLists$ after delete or update any client
  updateClientsLists() {
    this.getClientList().subscribe((clients) => {
      this.clientsList$.next(clients);
    });
  }

  addNewClient(form: any) {
    return this.http.post(this.clientsApiUrl, form);
  }

  updateClient(form: any) {
    return this.http.put(`${this.clientsApiUrl}${form.id}`, form);
  }

  getClientDetails(id: string): Observable<Client> {
    return this.http.get<Client>(`${this.clientsApiUrl}${id}`);
  }
}

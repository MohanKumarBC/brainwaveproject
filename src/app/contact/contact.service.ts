import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}
  getAll() {
    return this.httpClient.get<Contact[]>('http://localhost:3000/contacts');
  }

  saveContactDet(obj: any) {
    return this.httpClient.post('http://localhost:3000/contacts', obj);
  }

  delete(id: any) {
    return this.httpClient.get<Contact>(`http://localhost:3000/contacts/${id}`);
  }
}

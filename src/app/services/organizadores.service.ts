import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganizadoresService {
  constructor() {}

  getOrganizadores() {
    return 'Hola mundo service';
  }
}

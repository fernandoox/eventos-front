import { TestBed } from '@angular/core/testing';

import { OrganizadoresService } from './organizadores.service';

describe('OrganizadoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizadoresService = TestBed.get(OrganizadoresService);
    expect(service).toBeTruthy();
  });
});

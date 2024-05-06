import { TestBed } from '@angular/core/testing';

import { LoginTrabajadorService } from './login-trabajador.service';

describe('LoginTrabajadorService', () => {
  let service: LoginTrabajadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginTrabajadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

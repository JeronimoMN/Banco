import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTrabajadorComponent } from './login-trabajador.component';

describe('LoginTrabajadorComponent', () => {
  let component: LoginTrabajadorComponent;
  let fixture: ComponentFixture<LoginTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginTrabajadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

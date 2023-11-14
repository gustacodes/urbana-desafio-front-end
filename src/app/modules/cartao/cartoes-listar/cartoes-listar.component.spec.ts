import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoesListarComponent } from './cartoes-listar.component';

describe('CartoesListarComponent', () => {
  let component: CartoesListarComponent;
  let fixture: ComponentFixture<CartoesListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartoesListarComponent]
    });
    fixture = TestBed.createComponent(CartoesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRemoverComponent } from './modal-remover.component';

describe('ModalRemoverComponent', () => {
  let component: ModalRemoverComponent;
  let fixture: ComponentFixture<ModalRemoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRemoverComponent]
    });
    fixture = TestBed.createComponent(ModalRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

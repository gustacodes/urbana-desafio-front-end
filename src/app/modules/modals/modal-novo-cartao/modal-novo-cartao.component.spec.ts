import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNovoCartaoComponent } from './modal-novo-cartao.component';

describe('ModalNovoCartaoComponent', () => {
  let component: ModalNovoCartaoComponent;
  let fixture: ComponentFixture<ModalNovoCartaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalNovoCartaoComponent]
    });
    fixture = TestBed.createComponent(ModalNovoCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

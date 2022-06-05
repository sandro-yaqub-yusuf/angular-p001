import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Contato } from 'src/app/models/contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html'
})

export class ContatoComponent implements OnInit {
  contatoForm!: FormGroup;
  contato!: Contato;
  formResultado: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      assunto: ['', [Validators.required, CustomValidators.rangeLength([5,100])]],
      mensagem: ['', [Validators.required, CustomValidators.rangeLength([5,1000])]]
    });
  }

  public adicionar() {
    if (this.contatoForm.dirty && this.contatoForm.valid) {
      this.contato = Object.assign({}, this.contato, this.contatoForm.value);

      this.formResultado = JSON.stringify(this.contatoForm.value);
    }
    else {
      this.formResultado = 'Formulário inválido para submeter !!!';
    }
  }
}

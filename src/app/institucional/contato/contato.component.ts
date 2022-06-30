import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { fromEvent, merge, Observable } from 'rxjs';
import { DisplayMessage, GenericValidatior, ValidationMessages } from 'src/app/exemplos/generics/form-validation';
import { Contato } from 'src/app/models/contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html'
})

export class ContatoComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];

  contatoForm!: FormGroup;
  contato!: Contato;
  formResultado: string = '';
  mudancasNaoSalvas: boolean = false;

  validationMessages!: ValidationMessages;
  genericValidator!: GenericValidatior;
  displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      nome: {
        required: 'O campo Nome é obrigatório',
        rangeLength: 'O campo Assunto precisa ter no mínimo 5 e no máximo 100 caracteres'
      },
      email: {
        required: 'O campo E-mail é obrigatório',
        email: 'O campo E-mail é inválido'
      },
      telefone: {
        required: 'O campo Telefone é obrigatório',
        rangeLength: 'O campo Assunto precisa ter no mínimo 10 e no máximo 11 dígitos'
      },
      assunto: {
        required: 'O campo Assunto é obrigatório',
        rangeLength: 'O campo Assunto precisa ter no mínimo 5 e no máximo 200 caracteres'
      },
      mensagem: {
        required: 'O campo Mensagem é obrigatório',
        rangeLength: 'O campo Mensagem precisa ter no mínimo 5 e no máximo 1000 caracteres'
      }
    };

    this.genericValidator = new GenericValidatior(this.validationMessages);
  };

  ngOnInit(): void {
    this.contatoForm = this.fb.group({
      nome: ['', [Validators.required, CustomValidators.rangeLength([5,100])]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, CustomValidators.rangeLength([10,11])]],
      assunto: ['', [Validators.required, CustomValidators.rangeLength([5,200])]],
      mensagem: ['', [Validators.required, CustomValidators.rangeLength([5,1000])]]
    });
  };

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.contatoForm);
      this.mudancasNaoSalvas = true;
    });
  };

  public adicionar() {
    if (this.contatoForm.dirty && this.contatoForm.valid) {
      this.contato = Object.assign({}, this.contato, this.contatoForm.value);

      this.formResultado = JSON.stringify(this.contatoForm.value);
      this.mudancasNaoSalvas = false;
    }
    else {
      this.formResultado = 'Formulário inválido para submeter !!!';
    }
  };
}

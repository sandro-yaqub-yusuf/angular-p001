import { FormGroup } from '@angular/forms';

export interface DisplayMessage {
  [key: string]: string
}

export interface ValidationMessages {
  [key: string]: { [key: string]: string }
}

export class GenericValidatior {
  constructor(private validationMessages: ValidationMessages) { }

  processarMensagens(container: FormGroup): { [key: string]: string } {
    let messages: any = {};

    for (let controlKey in container.controls) {
      if (container.controls.hasOwnProperty(controlKey)) {
        let ctk = container.controls[controlKey];

        if (ctk instanceof FormGroup) {
          let childMessages = this.processarMensagens(ctk);

          Object.assign(messages, childMessages);
        }
        else {
          if (this.validationMessages[controlKey]) {
            messages[controlKey] = '';

            if ((ctk.dirty || ctk.touched) && ctk.errors) {
              Object.keys(ctk.errors).map(messageKey => {
                if (this.validationMessages[controlKey][messageKey]) {
                  messages[controlKey] += (this.validationMessages[controlKey][messageKey] + '<br/>');
                }
              });
            }
          }
        }
      }      
    }

    return messages;
  }
}

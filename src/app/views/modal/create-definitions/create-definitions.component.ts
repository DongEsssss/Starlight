import { Component, OnInit } from '@angular/core';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { definitions } from 'src/app/models/contract-definitions';

@Component({
  selector: 'app-create-definitions',
  templateUrl: './create-definitions.component.html',
  styleUrls: ['./create-definitions.component.css']
})
export class CreateDefinitionsComponent extends DefaultFormComponent<definitions> implements OnInit {
  definitionsList : Array<definitions> =[];

  override ngOnInit(): void {
    super.ngOnInit();
    this.newForm = [
      { name: 'id', text: 'Definition ID', type: 'string', placeholder: 'test-document', require: true },
      { name: 'accessPolicyId', text: 'accessPolicyId', type: 'string', placeholder: 'AccessPolicyID....', require: true },
      { name: 'contractPolicyId', text: 'contractPolicyId', type: 'string', placeholder: 'contractPolicyId...', require: true },
      { name: 'operandLeft', text: 'operandLeft', type: 'string', placeholder: 'operandLeft...', require: true },
      { name: 'operandRight', text: 'operandRight', type: 'string', placeholder: 'operandRight...', require: true },
    ];
    this.validationStateMap = {
      "id": true,
      "accessPolicyId": true,
      "contractPolicyId": true,
      "operandLeft": true,
      "operandRight": true
    };
    this.formData = new definitions();
  }
  
  override resetFormState() {
    this.validationStateMap = {
      "id": true,
      "accessPolicyId": true,
      "contractPolicyId": true,
      "operandLeft": true,
      "operandRight": true
    };
  }

  override resetFormModel(): void {
    super.resetFormModel();
    this.inlineAlert.close();
    this.formValueChanged = false;
    this.formData = new definitions();
  }

  create() {
    let tempData = this.modalForm.value;
    if (!tempData == null) {
      tempData = null
    }
    let definitionFormData = {
      "id":tempData.id,
      "accessPolicyId":tempData.accessPolicyId,
      "contractPolicyId": tempData.contractPolicyId,
      "criteria": [{
        "operandLeft": tempData.operandLeft,
        "operandRight": tempData.operandRight,
        "operator": "="
      }]
  }
  
    this.restService.createDefinition(definitionFormData).subscribe((res: any) => {
      this.onGoing = false;
      this.close()
      this.onrefresh()
    }, err => {
      this.onGoing = false;
      this.inlineAlert.showInlineError('BAD REQUEST');
      console.log(err);
    });
    this.modalForm.reset();
    if (!this.isValid) {
      return;
    }
    // We have new user data
    if (!definitionFormData) {
      return;
    }
  }
}


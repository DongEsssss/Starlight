import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular/wizard';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { FormField, } from 'src/app/models/common';
import { policyList } from 'src/app/models/policies';
import { ClrDatagrid } from '@clr/angular';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})

export class PoliciesComponent extends DefaultFormComponent<policyList> implements OnInit {
  @ViewChild("number") numberFi: any;
  @ViewChild("wizard") wizard !: ClrWizard;
  searchText !: any;
  mdOpen: boolean = false;
  untouched: boolean = true;
  progress: number = 0;
  actionForm: Array<FormField> = [];
  textform: Array<FormField> = [];
  policy: policyList[] = [];
  cSelection: any;
  totalCount: number = 0;
  cDataLoading: boolean = false;
  page: number;
  loadingFlag: boolean = false;
  errorFlag: boolean = false;

  //wizzard
  model = {
    id: "",
    type: "",
  };
  doCancel(): void {
    this.wizard.close();
    this.resetWizard();
  }

  resetWizard(): void {
    this.wizard.reset();
    this.model.id = "";
    this.model.type = "";
    this.progress = 0;
  }

  onCommit(): void {
    if (this.untouched) {
      this.untouched = false;
      this.loading = true;
      let timer = setInterval(() => {
        this.progress = this.progress + 14;

        if (this.progress > 99) {
          this.progress = 100;
          this.loading = false;
          clearInterval(timer);
        }
      }, 1000);
    } else {
      this.wizard.forceFinish();
      this.resetWizard();
    }
  }
  // have to define doCancel because page will prevent doCancel from working
  // if the page had a previous button, you would need to call
  // this.wizard.previous() manually as well...


  override ngOnInit(): void {
    super.ngOnInit();
    this.newForm = [
      { name: 'id', text: 'PolicyID', require: true, type: 'string', placeholder: "test-document" },
      { name: 'uid', text: 'UID', type: 'string', require: true, placeholder: "956e172f-2de1-4501-8881-057a57fd0e69" },
      { name: 'target', text: 'Target', type: 'string', require: true, placeholder: "test-document" },
      { name: 'edctype', text: 'edctype', type: 'string' ,require : true, placeholder : "dataspaceconnector:permission"},
      { name: 'assignee', text: 'Assignee', type: 'string' },
      { name: 'assigner', text: 'Assigner', type: 'string' },
    ];
    this.actionForm = [
      { name: 'type', text: 'type', require: true, type: 'string', placeholder: "USE" },
      { name: 'includedIn', text: 'IncludeIn', type: 'string', require: true, placeholder: "test" },
      { name: 'Constraint', text: 'Constraint', type: 'string', },
    ];
    this.textform = [
      { name: 'constraints', text: 'Constraints', type: 'string' },
      { name: 'duties', text: 'Duties', type: 'string' },
    ]
    this.validationStateMap = {
      "id": true,
      "edctype": true,
      "uid": true,
      "type": true,
      "target": true,
      "assignee": true,
      "assigner": true,
      "constraint": true,
      "duties": true,
      "Constraint" : true
    };

    this.formData = new policyList();
  }

  // datagrid
  defaultColDef = {
    editable: false,
    enableRowGroup: true,
    enablePivot: true,
    enableValue: true,
    sortable: false,
    resizable: true,
    filter: false,
    flex: 1,
    minWidth: 100,
  };

  @ViewChild('cDataGrid', { static: true }) cDataGrid !: ClrDatagrid;
  columnDefs = [
    { headerName: 'No'},
    { headerName: 'Policy ID'},
    { headerName: 'Create Date'}
  ];

  getField(policy: policyList, key: any) {
    return policy[key as keyof policyList];
  }
  //policy-request
  override ngOnCommonInit(): void {
    super.ngOnCommonInit();
    this.onRefresh();
  }
  async getRequestPolicy() {
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    await this.restService.getRequestPolicy().subscribe((resp: any) => {
      this.policy = resp;
      this.totalCount = parseInt(resp.totalCount!)
      this.cDataLoading = false;
      console.log(resp)
    },
      (err) => {
        this.cDataLoading = false;
        console.log(err);
      }
    );
  }

  override resetFormModel(): void {
    super.resetFormModel();
    this.inlineAlert.close();
    this.formValueChanged = false;
    this.formData = new policyList();
  }

  override resetFormState() {
    this.validationStateMap = {
      "id": true,
      "edctype": true,
      "uid": true,
      "type": true,
      "target": true,
      "assignee": true,
      "assigner": true,
      "constraints": true,
      "duties": true,
      "constraint" : true
    };
  }

  create() {
    let tempData = this.modalForm.value;
    if (!tempData.item == null) {
      tempData.item = null
    }
    let policyformdata = {
      "id": tempData.id,
      "policy": {
        "uid": tempData.uid,
        "permissions":
          {
            "edctype": "dataspaceconnector:permission",
            "uid": tempData.uid,
            "target": tempData.target,
            "action": {
              "type": tempData.type,
              "includedIn": tempData.includedIn,
              "Constraint": tempData.constraint
            },
            "assignee": tempData.assignee,
            "assigner": tempData.assigner,
            "constraints": tempData.constraints,
            "duties": tempData.duties
          },
        "prohibitions": [],
        "obligations": [],
        "extensibleProperties": {},
        "inheritsFrom": null,
        "assigner": null,
        "assignee": null,
        "target": null,
        "@type": {
          "@policytype": "set"
        }
      }
    }  
    this.restService.createpolicy(policyformdata).subscribe((res: any) => {
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
    if (!policyformdata) {
      return;
    }
  }
  //delete
  delete(id){
    this.restService.deletepolicy(id).subscribe({
      next: () => {
        this.getRequestPolicy();
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => console.info(`Policy ID : ${id} Delete Complete`)
    });
  }
}


import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular/wizard';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { FormField, } from 'src/app/models/common';
import { policyList } from 'src/app/models/policies';
import { ClrDatagrid } from '@clr/angular';
import { HTTP_CODE_SUCCESS, MODAL_RES_CLOSE } from 'src/app/utils/shared.utils';

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
      { name: 'policy_id', text: 'PolicyID', require: true, type: 'string', placeholder: "test-document" },
      { name: 'type', text: 'type', require: true, type: 'string', placeholder: "rest or get" },
      { name: 'assignee', text: 'Assignee', type: 'string' },
      { name: 'assigner', text: 'Assigner', type: 'string' },
      { name: 'inherits_from', text: 'Inherits From', type: 'string' },
      { name: 'target', text: 'Target', type: 'string' },
    ];
    this.textform = [
      { name: 'permission', text: 'Permission', type: 'string' },
      { name: 'prohibitions', text: 'Prohibitions', type: 'string' },
      { name: 'extensible_properties', text: 'Extensible Properties', type: 'string' },
      { name: 'obligation', text: 'Obligation', type: 'string' }
    ]
    this.validationStateMap = {
      "policy_id": true,
      "type": true,
      "assignee": true,
      "assigner": true,
      "inherits_from": true,
      "target": true,
      "permission": true,
      "prohibitions": true,
      "extensible_properties": true,
      "obligation": true
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
    { headerName: 'No', field : 'no'},
    { headerName: 'Policy ID', field: 'id' },
    { headerName: 'Create Date', field: 'createdAt' }
  ];

  getField(policy: policyList, key: any) {
    return policy[key as keyof policyList];
  }
  //policy-request
  override ngOnCommonInit(): void {
    super.ngOnCommonInit();
    this.onRefresh();
  }
  onRefresh(): void {
    this.page = 1
    this.getRequestPolicy();
  }

  async getRequestPolicy() {
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    this.policy.length = 0;
    await this.restService.getRequestPolicy().subscribe((resp: any) => {
      this.policy = resp;
      this.totalCount = parseInt(resp.totalCount!)
      this.cDataLoading = false;
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
      "policy_id": true,
      "type": true,
      "assignee": true,
      "assigner": true,
      "inherits_from": true,
      "target": true,
      "permission": true,
      "prohibitions": true,
      "extensible_properties": true,
      "obligation": true
    };
  }
  override open(asset?: policyList): void {
    super.open();
    this.resetFormState();
  }

  override close() {
    super.close()
  }

  create() {
    let tempData = this.modalForm.value
    if (!tempData == null) {
      tempData = null
    }
    let policyformdata = {
      "policy": {
        "uid": "956e172f-2de1-4501-8881-057a57fd0e69",
        "permissions": [
          {
            "edctype": "dataspaceconnector:permission",
            "uid": "test",
            "target": "test-document1",
            "action": {
              "type": "USE",
              "includedIn": "test",
              "constraint": null
            },
            "assignee": "test",
            "assigner": "test",
            "constraints": [],
            "duties": []
          }
        ],
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
    }, err => {
      this.onGoing = false;
      this.inlineAlert.showInlineError('BAD REQUEST');
      console.log(err);
    });
    this.modalForm.reset();
  }
}


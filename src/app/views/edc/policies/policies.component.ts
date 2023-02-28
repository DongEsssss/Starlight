import { Component, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular/wizard';
import { policy } from 'src/app/models/policies';
import { DeleteComponent } from '../../modal/delete/delete.component';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent {
  poID !: string;
  created_at !: string;
  policy_type !: string;
  create_at !: string;
  target !: string;
  assginee!: string;
  assginer!: string;
  inherits !: string;
  open !: boolean;
  policy=policy;
  policies: any;
  searchText!: string;
  permission !: JSON;
  Prohibitions!: JSON;
  extensible_properties !: JSON;
  duties !: JSON;
  
  @ViewChild('delete', { static: false }) Delete !: DeleteComponent
  @ViewChild("number") numberFi !: any;
  deletemodal() {
    this.Delete.open();
  }

  model = {
    name: "",
    favorite: "",
    number: ""
  };

    @ViewChild("wizard")
    wizard!: ClrWizard;

    untouched: boolean = true;
    loading: boolean = false;
    errorFlag: boolean = false;
    progress: number = 0;

    get readyToFinish(): boolean {
        return !this.untouched && !this.loading;
    }

    wizards = {
        poID: "",
        create_at: "",
        policy_type: ""
    };
    doCancel(): void {
        this.wizard.close();
        this.resetWizard();
    }
    onDelete(){
      this.Delete.open();
    }
    resetWizard(): void {
        this.wizard.reset();
        this.wizards.poID = "";
        this.wizards.create_at = "";
        this.wizards.policy_type = "";
        this.progress = 0;
    }
}


import { Component, Input } from '@angular/core';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { policyList } from 'src/app/models/policies';

@Component({
  selector: 'app-policy-detail',
  templateUrl: './policy-detail.component.html',
  styleUrls: ['./policy-detail.component.css']
})
export class PolicyDetailComponent extends DefaultFormComponent<policyList>{
  policyList: policyList[] = [];  

  @Input() override id: any;
  @Input() override item: any;
 
  constraints : any;
  duties : any;
  
  ngOnChanges(): void {
    if (this.item) {
      this.policyList[0] = this.item
      this.duties = JSON.stringify(this.policyList[0].policy.permissions[0].duties[0])
      this.constraints = JSON.stringify(this.policyList[0].policy.permissions[0].constraints[0])
      console.log(this.policyList[0])
    }
  }
  delete(id: any) {
    this.restService.deletepolicy(id).subscribe({
      next: () => {
        this.item;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => console.info(`Policy ID : ${id} Delete Complete`)
    });
    this.close()
    this.onRefresh()
  }
}

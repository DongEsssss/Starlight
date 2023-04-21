import { Component, Input } from '@angular/core';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { agreement } from 'src/app/models/contract-agreement';

@Component({
  selector: 'app-detail-agreement',
  templateUrl: './detail-agreement.component.html',
  styleUrls: ['./detail-agreement.component.css']
})
export class DetailAgreementComponent extends DefaultFormComponent<agreement> {
    agreementList : agreement[] = [];

    @Input() override item: any;
    @Input() override id: any;

    ngOnChanges(): void {
      if (this.item) {
        this.agreementList[0] = this.item
        console.log(this.agreementList[0])
      }
    }
    cancelagreement(id : any){
      this.id= id;
      this.restService.cancelagreement(id).subscribe((resp:any)=>{
        if(this.item.state == "ERROR"){
          alert("Already Cancel")
        }
        else{
          console.log("end")
        }
      })
    }
}

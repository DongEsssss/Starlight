import {Component} from '@angular/core';
import {DefaultModalComponent} from 'src/app/components/default.modal.component';
import {policy} from 'src/app/models/policies';

@Component({
  selector: 'app-create-policies',
  templateUrl: './create-policies.component.html',
  styleUrls: ['./create-policies.component.css']
})
export class CreatePoliciesComponent extends DefaultModalComponent<policy> {

}

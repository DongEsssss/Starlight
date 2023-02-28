import { Component } from '@angular/core';
import { DefaultModalComponent } from 'src/app/components/default.modal.component';
import { definitions } from 'src/app/models/contract-definitions';

@Component({
  selector: 'app-create-definitions',
  templateUrl: './create-definitions.component.html',
  styleUrls: ['./create-definitions.component.css']
})
export class CreateDefinitionsComponent extends DefaultModalComponent<definitions>{
  definition = definitions 
  dp !: string;
  cp: any;
  ap !: string;
  state: any;
  startdate !: Date
  enddate !: Date
  description !: JSON
}

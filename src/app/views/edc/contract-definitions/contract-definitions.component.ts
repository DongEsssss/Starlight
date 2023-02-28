import { Component, ViewChild } from '@angular/core';
import { definitions } from 'src/app/models/contract-definitions';
import { CreateDefinitionsComponent } from '../../modal/create-definitions/create-definitions.component';
import { DeleteComponent } from '../../modal/delete/delete.component';

@Component({
  selector: 'app-contract-definitions',
  templateUrl: './contract-definitions.component.html',
  styleUrls: ['./contract-definitions.component.css']
})
export class ContractDefinitionsComponent {
  searchText: any;
  definition = definitions 

  @ViewChild ('definitions', { static:false}) definitions !: CreateDefinitionsComponent
  @ViewChild ('delete',{static:false}) delete !: DeleteComponent
  createbtn(){
    this.definitions.open();
  }
  onDelete(){
    this.delete.open();
  }
}

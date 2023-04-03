import { Component, OnInit, ViewChild } from '@angular/core';
import { definitions } from 'src/app/models/contract-definitions';
import { CreateDefinitionsComponent } from '../../modal/create-definitions/create-definitions.component';
import { DefaultFormComponent } from 'src/app/components/default.form.component';


@Component({
  selector: 'app-contract-definitions',
  templateUrl: './contract-definitions.component.html',
  styleUrls: ['./contract-definitions.component.css']
})
export class ContractDefinitionsComponent extends DefaultFormComponent<definitions> implements OnInit {

  searchText: any;
  definition = definitions
  @ViewChild('definitions', { static: false }) definitions !: CreateDefinitionsComponent


  createbtn() {
    this.definitions.open();
  }

}

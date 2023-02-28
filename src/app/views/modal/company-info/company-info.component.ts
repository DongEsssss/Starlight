import { Component } from '@angular/core';
import { DefaultModalComponent } from 'src/app/components/default.modal.component';
import { CompanyInfo } from 'src/app/models/company';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent extends DefaultModalComponent<CompanyInfo> {

}

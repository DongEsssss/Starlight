import { Component, Input } from '@angular/core';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { definitions } from 'src/app/models/contract-definitions';

@Component({
  selector: 'app-detail-defintion',
  templateUrl: './detail-defintion.component.html',
  styleUrls: ['./detail-defintion.component.css']
})

export class DetailDefintionComponent extends DefaultFormComponent<definitions>{
    definitionsList: definitions[] = [];
  
    @Input() override item: any;
    @Input() override id: any;

    operator : string = "="

    ngOnChanges(): void {
      if (this.item) {
        this.definitionsList[0] = this.item
        console.log(this.definitionsList[0])
      }
    }
  
    delete(id: any) {
      this.restService.deleteDefinition(id).subscribe({
        next: () => {
          this.item;
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => console.info(`Defintion ID : ${id} Delete Complete`)
      });
    }
  }
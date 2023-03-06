import {Component} from '@angular/core';
import {DefaultModalComponent} from 'src/app/components/default.modal.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent extends DefaultModalComponent<null> {

}

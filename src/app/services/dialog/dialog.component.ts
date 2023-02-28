import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from './dialog.service';
import { Observable } from 'rxjs';
import { AcceptType, ConfirmOptions } from './dialog.types';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {

  options$: Observable<ConfirmOptions>;

  constructor(private dialogService: DialogService) {
    this.options$ = this.dialogService.options$;
  }

  getAcceptClass(acceptType: AcceptType): string {
    const classMap = {
      primary: 'btn-primary',
      success: 'btn-success',
      warning: 'btn-warning',
      danger: 'btn-danger',
    };
    return classMap[acceptType];
  }

  close(value: boolean) {
    this.dialogService.close(value);
  }
}

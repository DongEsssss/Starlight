import {Component, OnInit, VERSION, ViewChild} from '@angular/core';
import {ClrDatagrid} from '@clr/angular';
import {DefaultComponent} from 'src/app/components/default.component';
import {User} from 'src/app/models/user';
import {RestService} from 'src/app/services/rest/rest.service';
import {UserCreateComponent} from 'src/app/views/modal/user-create/user-create.component';

@Component({
  selector: 'app-ur-form',
  templateUrl: './ur-form.component.html',
  styleUrls: ['./ur-form.component.css']
})
export class UrFormComponent extends DefaultComponent implements OnInit {

  @ViewChild('cDataGrid', {static: true}) cDataGrid !: ClrDatagrid;
  cDataLoading: boolean = false;
  cSelection?: any;
  currentFilteredType: number = 0; // all projects
  projectName: string = '';
  historyList: User[] = [];
  searchText !: string;

  columnDefs = [
    {headerName: 'UserNm', field: 'usernumber'},
    {headerName: 'Position', field: 'userposotion'},
    {headerName: 'UserName', field: 'username'},
    {headerName: 'UserID', field: 'userid'},
    {headerName: 'Email', field: 'email'},
    {headerName: 'Phone', field: 'phone'},
    {headerName: 'Administrator', field: 'admin'},
    {headerName: 'CreateDate', field: 'createdate'},
  ];

  getField(history: User, key: string) {
    return history[key as keyof User];
  }

  override onRefresh(): void {
    // console.log(this.gridApi.setdatasou');
    // this.gridApi.refreshServerSide();
  }

  onEdit() {

  }

  onDelete() {

  }

  @ViewChild('usercreate', {static: false}) UserCreate !: UserCreateComponent

  onCreate() {
    this.UserCreate.open();
  }
}

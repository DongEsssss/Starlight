import { Component, OnInit } from '@angular/core';
import { DefaultComponent } from 'src/app/components/default.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent extends DefaultComponent implements OnInit{
  searchText ?: any;
}

import { Component, OnInit } from '@angular/core';
import { Bill } from '../bill.model';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  bills: Bill[] = [
    new Bill('Test Bill', 'Description here', 500)
  ];

  constructor() { }

  ngOnInit() {
  }

}

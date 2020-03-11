import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-advanced',
  templateUrl: './pagination-advanced.component.html',
  styleUrls: ['./pagination-advanced.component.css']
})
export class PaginationAdvancedComponent{

  page = 3;
  p=1
  collection = [];
  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  //We define a property in the class called 'product'
  //the @Input() before it indicates that we get this property's value from it being passed in by
  //ProductAlertsComponent's parent: ProductListComponent

  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
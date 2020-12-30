import { Component, OnInit } from '@angular/core';
import Product from '../Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  
  products: any;
  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.ps.getProducts()
      .subscribe((data: any) => {
        console.log(data);
        this.products = data;
        
        console.log(this.products);
    });
  }

  updateStatus(id: any, Status: any) {
    //console.log(id + " " + status);
    Status = !Status;
    //console.log(Status);
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i]._id == id) {
        this.products[i].Status = Status;
        break;
      }
    }
    this.ps.updateProducts(id, Status);
  }

}

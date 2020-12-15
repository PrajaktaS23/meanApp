import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  angForm: any;
  constructor(private fb: FormBuilder, private ps: ProductsService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required ],
      Categories: ['', Validators.required ],
      Tags: ['', Validators.required ],
      Price: ['', Validators.required ],
      Quantity: ['', Validators.required ]
    });
  }
  addProduct(ProductName: any,Categories: any, Tags: any,Price: any,Quantity: any) {
    this.ps.addProduct(ProductName,Categories, Tags,Price,Quantity);
  }
  ngOnInit() {
  }

}


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ListingComponent } from './listing/listing.component';


const routes: Routes = [
  {
    path: 'product/create',
    component: AddProductComponent
  },
 
  {
    path: 'products',
    component: ListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products/products.component';
import { PeopleComponent } from './people/people.component';
import { UserResolver } from './people/user.resolver';
import { UserComponent } from './people/user/user.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'people', component: PeopleComponent },
  {
    path: 'people/:id',
    component: UserComponent,
    resolve: {
      user: UserResolver,
    },
  },
  { path: '', redirectTo: '/people', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarRatingComponent } from './star-rating/star-rating.component';

const routes: Routes = [
  { path: 'stars', component: StarRatingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing = RouterModule.forRoot(routes);

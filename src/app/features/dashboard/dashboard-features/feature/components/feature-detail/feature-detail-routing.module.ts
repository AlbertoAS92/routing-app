import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureDetailComponent } from './feature-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class FeatureDetailRoutingModule {}

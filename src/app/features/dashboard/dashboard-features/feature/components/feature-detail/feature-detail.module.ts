import { NgModule } from '@angular/core';
import { FeatureDetailRoutingModule } from './feature-detail-routing.module';
import { DashboardSharedModule } from '../../../../dashboard-shared/dashboard-shared.module';
import { FeatureDetailComponent } from './feature-detail.component';

const modules = [
  FeatureDetailRoutingModule,
  DashboardSharedModule
];

const components = [
  FeatureDetailComponent
];

const providers = [];

@NgModule({
  imports: modules,
  declarations: components,
  providers
})
export class FeatureDetailModule {}

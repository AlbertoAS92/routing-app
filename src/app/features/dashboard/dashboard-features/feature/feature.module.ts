import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { DashboardSharedModule } from '../../dashboard-shared/dashboard-shared.module';
import { FeatureService } from './feature.service';
import { RouterModule } from '@angular/router';

const modules = [
  FeatureRoutingModule,
  DashboardSharedModule,
  RouterModule
];

const components = [
  FeatureComponent
];

const providers = [
  FeatureService
];

@NgModule({
  imports: modules,
  declarations: components,
  providers
})
export class FeatureModule {}

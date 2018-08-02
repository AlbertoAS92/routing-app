import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardCoreModule } from './dashboard-core/dashboard-core.module';

const modules = [
  DashboardRoutingModule,
  DashboardCoreModule
];

const components = [
  DashboardComponent
];

const providers = [];

@NgModule({
  imports: modules,
  declarations: components,
  providers
})
export class DashboardModule {}

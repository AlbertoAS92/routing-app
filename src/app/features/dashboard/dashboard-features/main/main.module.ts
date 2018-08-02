import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DashboardSharedModule } from '../../dashboard-shared/dashboard-shared.module';

const modules = [
  MainRoutingModule,
  DashboardSharedModule
];

const components = [
  MainComponent
];

const providers = [];

@NgModule({
  imports: modules,
  declarations: components,
  providers
})
export class MainModule {}

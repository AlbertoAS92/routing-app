import { NgModule } from '@angular/core';
import { DashboardNavigationBarComponent } from './components/dashboard-navigation-bar/dashboard-navigation-bar.component';
import { RouterModule } from '@angular/router';

const modules = [
  RouterModule
];

const components = [
  DashboardNavigationBarComponent
];

const exported = [
  ...components
];

const providers = [];

@NgModule({
  imports: modules,
  declarations: components,
  exports: exported,
  providers
})
export class DashboardCoreModule {}

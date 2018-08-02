import { NgModule } from '@angular/core';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';

const modules = [
  RouterModule
];

const components = [
  NavigationBarComponent
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
export class CoreModule {}

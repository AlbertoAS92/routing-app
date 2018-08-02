import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomePageComponent } from './containers/home-page.component';
import { HomeRoutingModule } from './home-routing.module';

const modules = [
  HomeRoutingModule,
  SharedModule
];

const components = [
  HomePageComponent
];

const providers = [];

@NgModule({
  imports: modules,
  declarations: components,
  providers
})
export class HomeModule {}

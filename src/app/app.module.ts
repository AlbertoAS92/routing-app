import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';

const modules = [
  BrowserModule,
  CoreModule,
  AppRoutingModule
];

@NgModule({
  imports: modules,
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  onClick(event: Event): void {
    event.preventDefault();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'rt-dashboard-navigation-bar',
  templateUrl: './dashboard-navigation-bar.component.html',
  styleUrls: ['./dashboard-navigation-bar.component.scss']
})
export class DashboardNavigationBarComponent {
  onClick(event: Event): void {
    event.preventDefault();
  }
}

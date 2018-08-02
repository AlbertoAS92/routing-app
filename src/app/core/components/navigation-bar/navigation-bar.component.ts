import { Component } from '@angular/core';

@Component({
  selector: 'rt-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  onClick(event: Event): void {
    event.preventDefault();
  }
}

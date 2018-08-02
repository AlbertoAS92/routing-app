import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureData, FeatureService } from './feature.service';

@Component({
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  data$: Observable<FeatureData[]>;
  title = 'Dashboard Feature Page';

  constructor(private featureService: FeatureService) {}

  ngOnInit(): void {
    this.data$ = this.featureService.getAllData();
  }
}

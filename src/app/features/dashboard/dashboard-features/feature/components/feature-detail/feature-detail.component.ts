import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeatureService } from '../../feature.service';

@Component({
  templateUrl: './feature-detail.component.html',
  styleUrls: ['./feature-detail.component.scss']
})
export class FeatureDetailComponent implements OnInit {
  title = 'Dashboard Feature Detail Page';
  data: string;
  id: number;

  constructor(private route: ActivatedRoute, private featureService: FeatureService) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.featureService.getData(this.id).subscribe(element => this.data = element.data);
  }
}

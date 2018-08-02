import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface FeatureData {
  id: number;
  data: string;
}

@Injectable()
export class FeatureService {

  data: FeatureData[] = [
    {
      id: 1,
      data: 'Data id 1'
    },
    {
      id: 2,
      data: 'Data id 2'
    },
    {
      id: 3,
      data: 'Data id 3'
    }
  ];

  getAllData(): Observable<FeatureData[]> {
    return of(this.data);
  }

  getData(id: number): Observable<FeatureData> {
    return of(this.data.find(element => element.id === id));
  }
}

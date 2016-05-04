import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Car} from '../../app/cars/car';
import {Observable} from 'rxjs';

@Injectable()
export class CarService {

    constructor(private http: Http) {}

    getCarsMedium() {
        return this.http.get('app/resources/data/streets.json')
          .map(response => response.json())
          .map(function(a){
            a.streets.forEach(function(val, index, arr){
              arr[index].href = arr[index].links[0].href;
              arr[index].rel = arr[index].links[0].rel;
              arr[index].id = index + 1;
            })
            return a;
          });
    }
}

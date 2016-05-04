import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {DataTable, Column, TabView, TabPanel, Fieldset, InputText, RadioButton, Checkbox, Button} from 'primeng/primeng';
import {Car} from './cars/car';
import {CarService} from './cars/carservice';
import {MenuComponent} from './menu.component';

@Component({
	templateUrl: 'app/app.component.html',
	selector: 'my-app',
  directives: [DataTable, Column, TabView, TabPanel, Fieldset, InputText, RadioButton, Checkbox, Button, MenuComponent],
	providers: [HTTP_PROVIDERS,CarService]
})
export class AppComponent {

	displayDialog: boolean;

    car: Car = new PrimeCar();

    selectedCar: Car;

		selectedSearch: string;

    newCar: boolean;

    cars: any[];

		cols: any[];

		value: boolean;

    constructor(private carService: CarService) {
			this.value = false;
		}

    ngOnInit() {
        this.carService.getCarsMedium().subscribe(cars => this.cars = cars.streets, err => console.log(err));
				this.cols = [
					{field: 'id', header: 'ID'},
					{field: 'streetName', header: 'Streetname'},
					{field: 'lang', header: 'Language'},
					{field: 'href', header: 'Link'},
					{field: 'rel', header: 'Relation'},
				];
    }

    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }

    save() {
        if(this.newCar)
            this.cars.push(this.car);
        else
            this.cars[this.findSelectedCarIndex()] = this.car;

        this.car = null;
        this.displayDialog = false;
    }

    delete() {
        this.cars.splice(this.findSelectedCarIndex(), 1);
        this.car = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(c: Car): Car {
        let car = new PrimeCar();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }

    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
}

class PrimeCar implements Car {

    constructor(public vin?, public year?, public brand?, public color?) {}
}

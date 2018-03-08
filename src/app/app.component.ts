import { Component } from '@angular/core';
import {DataserviceService} from './dataservice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {


constructor (private DataserviceService:DataserviceService){
	

}

prop:string = '';

ngOnInit(){
console.log(this.DataserviceService.cars);
this.prop = this.DataserviceService.data();
}


anglogo = "https://upload.wikimedia.org/wikipedia/commons/f/f2/147th-Fighter-Interceptor-Group-ADC-TX-ANG.png";

  title = 'app';
myobject = {
name: 'ivan',
id: '1',
city:'lviv'

  }

myarray = ['suck','fuck','duck']
bstatus = 'enabled';


myevent(event){
	console.log(event);
}


titleclass = "red"

titleclasses = {
	'red':true,
	'blue':true,

}


style = false;

styles = {
	'color' : 'red',
	'font-size' : '4em'


}
}




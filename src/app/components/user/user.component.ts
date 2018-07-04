import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	name:string;
	age:number;
	email:string;
	address: Address;
	hobbies: string[];
	hello: any;
  isEdit: boolean = false;
  users: string[];

  constructor(public dataService: DataService) { 
  	console.log('constructor ran ...');
    //this.users = this.dataService.getUsers();
  }

  ngOnInit() {
  	console.log('ngOnInit ran ...');
  	this.name = "Rose";
  	this.age = 18;
  	this.email = "rose.jiang@sina.com";
  	this.address =  {
  		street: "longshan",
  		city: "changxing",
  		state: "siping"
  	};
  	this.hobbies = ["a", "b", "c"];
  	this.hello = true;
  }

  onClick() {
    this.name = "Miss.Jiang";
    this.hobbies.push("New Hobby");
  }

  addHobby(hob) {
    this.hobbies.unshift(hob);
    return false;
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Address {
	street: string,
	city: string,
	state: string
}

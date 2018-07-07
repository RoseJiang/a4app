import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
	id: number;
	user: object = {};

  constructor(private router:Router, private route:ActivatedRoute, private datservice:DataService) { 
        this.route.params.subscribe((params: Params)=>{
       	   this.id = params.id;
       });
  }

  ngOnInit() {
     this.datservice.getSingleUser(this.id).subscribe(user => {
     	this.user = user;
     	console.log(this.user);
     });
     
  }

}

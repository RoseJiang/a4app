import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   users:string[];
   data: any[] = [];
   user = {
     id: "",
     name: "",
     email: "",
     phone: ""
   };
   isEdit: boolean = false;

  constructor(public dataService: DataService) { 
    //this.users = this.dataService.getUsers();
    this.dataService.getUsers().subscribe(data => {
        this.data = data;
    });
  }

  onSubmit(isEdit) {
    if(isEdit) {
      this.dataService.updateUser(this.user).subscribe(data=>{
        //先删除
        for (let i = 0; i <= this.data.length -1; i++) {
          console.log("This is " + this.data[i]);
          if(this.data[i].id == this.user.id) {
             this.data.splice(i, 1);
          }
       }
        //后更新
        this.data.unshift(this.user);

      });
    } else{
      this.dataService.addUsers(this.user).subscribe(data=>{
         this.data.unshift(this.user);
       });
    }
       
  }

  onDelete(id){
    this.dataService.deleteUser(id).subscribe(res=>{
        for (let i = 0; i <= this.data.length -1; i++) {
          console.log("This is " + this.data[i]);
          if(this.data[i].id == id) {
             this.data.splice(i, 1);
             return;
          }
        }
    });
     
  }

  onEdit(user) {
      this.isEdit = true;
      this.user = user;
  }

  ngOnInit() {
  }

}

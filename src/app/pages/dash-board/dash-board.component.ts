import { timeConverter } from './../../../util/timeConverter';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  users:User[]=[]; 
  isAdmin:Boolean = false;

  constructor( private userService: UserService,) { }

  ngOnInit(): void {
    const isAdmin = localStorage.getItem('isAdmin');
    this.isAdmin = isAdmin ==='true' ? true : false;
    console.log(this.isAdmin);
    this.loadData();
  }


  loadData(){
  

    this.userService.getAlls().subscribe((res:any)=>{
       const {users} = res
        console.log(res)
        console.log(this.users); 

      users.map((user:any) =>{
        user.createdAt = timeConverter(user.createdAt);
      })
      this.users = users  
    })
  }
    onDelete(id:any) {
      console.log(id);
      this.userService.deleteUser(id).subscribe((res:any)=>{
        console.log(res);
      this.loadData();
      })
    }

    onBlock(id:any){
      this.userService.blockUser(id).subscribe((res:any)=>{
        this.loadData();
      })
      
    }
    onUnBlock(id:any){
      this.userService.unBlockUser(id).subscribe((res:any)=>{
        this.loadData();
      })
      
    }

    
   

}

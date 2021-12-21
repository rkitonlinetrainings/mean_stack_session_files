import { Component, OnInit } from '@angular/core';
import { User } from "./models/user.model";
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud-operations';

  users: User[] = [];
  
  userForm: boolean = false;
  isNewUser: boolean = false;


  newUser: any = {};
  editUserForm: boolean = false;
  editedUser: any = {};

  constructor(private userService: UserService) {}
  
  ngOnInit(): void {
      this.users = this.getUsers();
  }

  getUsers(): User[] {
    return this.userService.getUsersFromData();
  }

  saveUser(user: User) {
    if(this.isNewUser) {
      this.userService.addUser(user);
    }
    this.userForm = false;
  }


  updateUser() {
    this.userService.updateUser(this.editedUser);
    this.editUserForm = false;
    this.editedUser = {};
  }

  removeUser(user: User) {
    this.userService.deleteUser(user);
  }

  cancelEdits() {
    this.editedUser = {};
    this.editUserForm = false;
  }

  cancelNewUser() {
    this.newUser = {};
    this.userForm = false;
  }

  showAddUserForm() {
    if(this.users.length) {
      this.newUser = 0;
    }
    this.userForm = true;
    this.isNewUser = true;
  }

  showEditUserForm(user: User) {
    if(!user) {
      this.userForm = false;
      return;
    }
    this.editUserForm = true;
    this.editedUser = user;
  }
}

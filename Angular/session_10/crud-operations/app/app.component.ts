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
  userForm: boolean = true;
  isNewUser: boolean = true;
  newUser: any = {};
  editUserForm: boolean = false;
  editedUser: any = {};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.getUsers();
  }

  getUsers(): User[] {
    return this.userService.getUsersFromData();
  }

  showEditUserForm(user: User) {
    if (!user) {
      this.userForm = false;
      return;
    }
    this.editUserForm = true;
    this.editedUser = user;
  }

  showAddUserForm() {
    // resets form if edited user
    if (this.users.length) {
      this.newUser = {};
    }
    this.userForm = true;
    this.isNewUser = true;

  }

  saveUser(user: User) {
    if (this.isNewUser) {
      // add a new user
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
}

import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { User } from './../../user.model';
import { UserService } from './../../ClarityDesignDataServiceService';

@Component({
  selector: 'app-display-todo-list',
  templateUrl: './display-todo-list.component.html',
  styleUrls: ['./display-todo-list.component.scss']
})
export class DisplayTodoListComponent implements OnInit {
  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;
  users: Array<User>;
  isNewRecord: boolean;
  statusMessage: string;
  message: string;
  user: User;
  selusr: User;
  constructor(private serv: UserService) {
    this.users = new Array<User>();

    //  this.http.get(this.url).subscribe(res =>{ this.users = res.json();
    //  this.users = this.users; 
    //  console.log(this.users);
    // },
    //       err => console.error(err), 
    //       () => console.log('get user completed') );
  }
  ngOnInit() {

    this.loadUser();

  }
  private loadUser() {
    this
      .serv
      .getUsers()
      .subscribe((resp: Response) => {
        this.users = resp.json();
        //console.log(JSON.stringify(resp.json()));    
      });
  }

  addusr() {
    this.selusr = new User(0, '', '', '', '');
    this.users.push(this.selusr);
    this.isNewRecord = true;
  }

  editUser(usr: User) {
    this.selusr = usr;
  }

  loadTemplate(usr: User) {
    if (this.selusr && this.selusr.id == usr.id) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }
  saveusr() {
    if (this.isNewRecord) {
      //add a new User
      this.serv.addUser(this.selusr).subscribe((resp: Response) => {
        this.user = resp.json(),
          this.statusMessage = 'Record Added Successfully.',
          this.loadUser();
      });
      this.isNewRecord = false;
      this.selusr = null;

    } else {
      //edit the record
      this.serv.updateUser(this.selusr.id, this.selusr).subscribe((resp: Response) => {
        this.statusMessage = 'Record Updated Successfully.',
          this.loadUser();
      });
      this.selusr = null;

    }
  }
  //9. Cancel edit
  cancel() {
    this.selusr = null;
  }
  //10 Delete User
  deleteusr(usr: User) {
    this.serv.deleteUser(usr.id).subscribe((resp: Response) => {
      this.statusMessage = 'Record Deleted Successfully.',
        this.loadUser();
    });

  }
}



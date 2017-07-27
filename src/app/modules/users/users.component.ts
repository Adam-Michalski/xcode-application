import { Component, OnInit } from '@angular/core';
import { Logger } from '@nsalaun/ng-logger';
import { TABLE_USERS } from '../../../assets/table-config/users-table.config';
import { User } from './user.class';
import { UsersService } from './users.service';

@Component({
  selector: 'xc-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users = Array<User>();
  public options = TABLE_USERS;
  public selected: any[] = [];

  constructor(private logger: Logger, private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getAll().subscribe((users: Array<User>) => {
      this.users = users;
    });
  }

  public onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
  }

  public onActivate(event) {
    console.log('Activate Event', event);
  }

}

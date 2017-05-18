import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {Logger} from '@nsalaun/ng-logger';
import {TABLE_USERS} from '../../../assets/table-config/users-table.config';

@Component({
  selector: 'xc-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users;
  options = TABLE_USERS;

  constructor(private logger: Logger, private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getAll().subscribe((res) => {
      this.logger.log(res);
      this.users = res;
    });
  }

}

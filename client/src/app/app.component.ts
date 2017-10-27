import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private userService:UserService) {}
	title = 'Angular4-MEAN Startup Project';

	users:any = [];

	ngOnInit() {
		this.userService.getUsers().subscribe(users => {
			this.users = users;
			console.log(users);
		})
	}
}

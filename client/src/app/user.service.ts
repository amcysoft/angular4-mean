import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http:Http) { }

  public getUsers() {
  	return this.http.get("/api/users").map((res: Response) => res.json())
  }

}

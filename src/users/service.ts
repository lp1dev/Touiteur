import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { User } from "./models";
import { HttpService } from "../shared/http.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class UserService {
  user: User
  subject: BehaviorSubject<User> = new BehaviorSubject(this.user)

  constructor(public http: HttpService) {
  }

  signUp(user) {
    return this
    .http
    .post('users', user)
  }

  loadUser() {
    this
    .http
    .get('users')
    .subscribe(
      response => this.subject.next(response.json()),
      error => console.error(error)
    )
  }

  login(user) {
    const loginSubject = new Subject()
    this
    .http
    .post('login', user)
    .subscribe(response => {
      loginSubject.next(response.json())
      this.http.token = response.json().token
      this.loadUser()
    }, error => {
      loginSubject.error(error)
    })
    return loginSubject.asObservable()
  }

  logout() {
    this.subject.next(null)
    this.user = null
    this.http.token = null
  }
}
import { Injectable } from "@angular/core";
import { Message } from "./models";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable"
import { Config } from "../shared/config";
import { HttpService } from "../shared/http.service";

@Injectable()
export class MessagesService {
  subject: Subject<Array<Message>> = new Subject()
  observable: Observable<Array<Message>> = this.subject.asObservable()

  constructor(public http: HttpService, public config: Config) {
  }

  loadMessages(page=1, items=6) {
    this
    .http
    .get(`messages?page=${page}&items=${items}`)
    .subscribe((response) => {
        console.log(response)
        this.subject.next(response.json())
      },
      (error) => this.subject.error(error.json()))
      return this.subject.asObservable()
  }

  loadMessagesPart(page=1, items=6) {
    return this.http.get(`messages?page=${page}&items=${items}`)
  }

  addMessage(message) {
    return this
              .http
              .post('messages', message)
  }
}
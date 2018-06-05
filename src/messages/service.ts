import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http"
import { Message } from "./models";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable"
import { Config } from "../shared/config";

@Injectable()
export class MessagesService {
  subject: Subject<Array<Message>> = new Subject()
  observable: Observable<Array<Message>> = this.subject.asObservable()

  constructor(public http: Http, public config: Config) {
  }

  loadMessages(refresher = null) {
    console.log(this.config)
    this
    .http
    .get(this.config.API_URL + '/messages')
    .subscribe((response) => {
        console.log(response)
        this.subject.next(response.json())
        if (refresher) {
          refresher.complete()
        }
      },
      (error) => console.error(error))
  }

  addMessage(message) {
    // this.__messages.push(message)
  }
}
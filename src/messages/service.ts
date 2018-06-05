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

  loadMessages(refresher = null) {
    this
    .http
    .get('messages')
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
    return this
              .http
              .post('messages', message)
  }
}
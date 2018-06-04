import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http"
import { Mock, Message } from "./messages-mock";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable"

@Injectable()
export class MessagesService {
  messagesSubject: Subject<Array<Message>> = new Subject()
  observable: Observable<Array<Message>> = this.messagesSubject.asObservable()
  private __messages: Array<Message> = Mock

  constructor(public http: Http) {
  }

  loadMessages(refresher = null) {
    this
    .http
    .get('http://127.0.0.1:8080/messages')
    .subscribe(
      (response) => {
        console.log(response)
        this.messagesSubject.next(response.json())
        if (refresher) {
          refresher.complete()
        }
      },
      (error) => console.error(error))
  }

  addMessage(message) {
    this.__messages.push(message)
  }
}
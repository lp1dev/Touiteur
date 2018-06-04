import { Component, Input } from "@angular/core";
import { Message } from "../messages-mock";

@Component({
  selector: 'text-message',
  templateUrl: 'text-message.html'
})
export class TextMessage {
  @Input() message: Message
  @Input() fullscreen: boolean
  constructor() {
    
  }
}
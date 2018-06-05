import { Component, Input } from "@angular/core";
import { Message } from "../models";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'text-message',
  templateUrl: 'text-message.html'
})
export class TextMessage {
  @Input() message: Message
  @Input() fullscreen: boolean
  constructor(public sanitizer: DomSanitizer) {
    
  }
}
import { Component, Input } from "@angular/core";
import { Message } from "../models";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'image-message',
  templateUrl: 'image-message.html'
})
export class ImageMessage {
  @Input() message: Message
  @Input() fullscreen: boolean

  constructor(public sanitizer: DomSanitizer) {
  }
}
import { Component, Input } from "@angular/core";
import { Message } from "../messages-mock";

@Component({
  selector: 'image-message',
  templateUrl: 'image-message.html'
})
export class ImageMessage {
  @Input() message: Message
  @Input() fullscreen: boolean
}
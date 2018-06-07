import { Injectable } from "@angular/core";
import { Config } from "./config";
import { Subject } from "rxjs/Subject";
import { LocalNotifications } from "@ionic-native/local-notifications";

@Injectable()
export class WebSocketService {
  webSocket: WebSocket
  connected: boolean = false
  subject: Subject<any> = new Subject()

  constructor(public config: Config, public localNotifications: LocalNotifications) {
    this.webSocket = new WebSocket(config.WS_URL)
    this.webSocket.onopen = event => this.onOpen(event)
    this.webSocket.onmessage = messageEvent => this.onMessage(messageEvent)
    this.webSocket.onerror = error => this.onError(error)
    this.webSocket.onclose = event => this.onClose(event)
  }
  onOpen(event) {
    console.log('WebSocketService :: onOpen ', event)
    this.connected = true
  }
  onMessage(messageEvent) {
    console.log('WebSocketService :: onMessage', messageEvent)
    const data = JSON.parse(messageEvent.data)
    this.localNotifications.schedule({
      id: 1,
      text: data.message,
      data: data.extra
    })
  }
  onError(error) {
    console.error('WebSocketService :: onError', error)
  }
  onClose(event) {
    console.warn('WebSocketService :: onClose', event)
    this.connected = false
  }
}
import { NgModule } from "@angular/core";
import { MessagesService } from "./service";
import { MessagesPage } from "./page";
import { TextMessage } from "./components/text-message.component";
import { ImageMessage } from "./components/image-message.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { IonicModule } from "ionic-angular";
import { PostPage } from "./messages-post/post.component";

@NgModule({
  imports: [ 
    BrowserModule, 
    HttpModule, 
    IonicModule
  ],
  entryComponents: [ MessagesPage, PostPage ],
  providers: [ MessagesService ],
  declarations: [ MessagesPage, PostPage, TextMessage, ImageMessage ],
  exports: [ MessagesPage, PostPage ]
})
export class MessagesModule { }

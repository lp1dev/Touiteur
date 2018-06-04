import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { MessagesPage } from '../pages/messages/messages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TextMessage } from '../pages/messages/components/text-message.component';
import { ImageMessage } from '../pages/messages/components/image-message.component'
import { PostPage } from '../pages/post/post.component';
import { MessagesService } from '../pages/messages/messages.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    MessagesPage,
    PostPage,
    TextMessage,
    ImageMessage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MessagesPage,
    PostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MessagesService
  ]
})
export class AppModule {}

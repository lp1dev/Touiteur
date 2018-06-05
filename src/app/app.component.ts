import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PostPage } from '../messages/messages-post/post.component';
import { MessagesPage } from '../messages/page';
import { LoginPage } from '../users/login/page';
import { UserService } from '../users/service';
import { ProfilePage } from '../users/profile/page';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MessagesPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public userService: UserService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Messages', component: MessagesPage },
      { title: 'Login', component: LoginPage }
    ];

    this.userService
        .subject
        .subscribe(user => {
          if (user) {
            this.pages = [
              { title: 'Messages', component: MessagesPage },
              { title: 'Post', component: PostPage },
              { title: 'Profile', component: ProfilePage }
            ]
          } else {
            this.pages = [
              { title: 'Messages', component: MessagesPage },
              { title: 'Login', component: LoginPage }
            ]
          }
        })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

# Message Board steps


## Part 1 (type 0 messages list + single message display)
 
- Init a project template
- Remove anything irrelevant
- Create a mock file from the data on the API, Models if necessary
- Display the mock text messages w/out avatars
- Display the avatars
- Add the action on the click on a message
- Display the clicked mock message

## Part 2

- Create a textMessage component w/ a message input
- Add it to the app.module
- Add a *ngIf to display the type 0 messages only if they are type 0
- Display the type 1 messages aswell
- Display the clicked type 1 messages
- Modal on image click ?
- Test on a mobile device

## Part 3

- Add a post page component
- Make its design
    - Input
    - Checkbox image (+ input)
    - Button
- Pre-fill the.message
- Bind the controls to this.message : Message
- Display the message before "sending" it
- Add the date

## Part 4

- Create a http.service.ts
- Create a messages.service.ts
- Add a messages attribute bound to the Mock
- Use the messagesService in the messages component
- Use the messagesService in the post component
- Add an addMessage method in MessagesService
- Use it in the post component and redirect to messages

## Part 5

- Use a get messages in the service to sort the messages
- create a loadMessages method in messages.service
- import { Http, Response } from "@angular/http"
- constructor(public http: Http)
- loadMessages : return this.http.get('http://127.0.0.1:8080/messages').toPromise()
- Show the error, add HttpModule to the imports
- response.json() pour afficher la réponse en json
- remplacer le mock par les messages téléchargés
- ne plus attendre le retour de loadMessages directement, le faire dans le messagesSubject (ajout messagesSubject, next etc..)
- Ajouter un pull to refresh https://ionicframework.com/docs/api/components/refresher/Refresher/
    
## Part 6 - Refactoring before adding the users

- Create a src/shared directory + module
- Add the injectable config to its providers
- Add the sharedModule to appModule
- Move everything messages-related to the messages module
- Create a config injectable

## Part 7 - Users

- create a src/users directory + module
- Add it to the appModule
- Add the Login Page with the signup button
- Add the Signup Page
- Add the Image-Picker module https://ionicframework.com/docs/native/image-picker/
- Add the Base64 module https://ionicframework.com/docs/native/base64/
- Add the userService and signup method
- Add a toast when the signup is OK or not
- Add the login method
    - DO not return this http.post, add a step where the token is saved in userService (const loginSubject inside)

## Part 8

- create a httpService if none (for the token)
- Inject the token in the httpService
- Add the token in the usersService.login method
- Display the post login pages only if needed by adding a getUser after the login
    and subscribe to user subject in app.component
- Add a redirection after login
- Update the post page with real user data and image upload
- Add the Profile page
- Add a logout usersService method + button on the profile

## Part 9

- add the infinite scroll on the messages
    - add a loadMessagesPartial methods, not pushing in the subject to load only a part of the messages to append
- add the ws notifications https://ionicframework.com/docs/native/local-notifications/ w/ local push
- add the messages reload on ionViewWillEnter()
- add the token save in the localStorage

## Part 10

- add a modal on the click of the image
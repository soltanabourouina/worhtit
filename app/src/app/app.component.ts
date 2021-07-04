import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyAXMqFNsnh5wDyX2I9vjQdoqAMwYRZLOvY",
      authDomain: "worthitfr.firebaseapp.com",
      projectId: "worthitfr",
      storageBucket: "worthitfr.appspot.com",
      messagingSenderId: "977698775690",
      appId: "1:977698775690:web:2d715fe7186a6b16fec373"
    };



}
}

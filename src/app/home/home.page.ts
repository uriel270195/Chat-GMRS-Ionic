import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild("content") content: any;
  userName: string = '';
  message: string = '';
  messages = [];

  constructor(public navCtrl: NavController){
    this.getMessages();
  }

  getMessages(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.on("value",(snap) =>{
      var data=snap.val();
      this,this.messages = [];
      for(var key in data){
        this.messages.push(data[key]);
      }
      this.scrollToBottom();
    });
  }

  sentMessage(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({mensaje: this.message, nombre: this.userName});
    this.message="";
  }
  scrollToBottom(){
    setTimeout(() => {
      this.content.scrollToBottom(300);
   }, 1000);
  }
}

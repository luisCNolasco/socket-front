import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  text:string = ''
  constructor(public chatService:ChatService) { }

  ngOnInit(): void {
  }

  sendMessage(){
    let messageInfo = {
      text:this.text,
      messageType:1
    }

    this.chatService.sendMessage(messageInfo);
    this.text = ''
  }
}

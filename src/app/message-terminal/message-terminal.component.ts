import { Component, OnInit } from '@angular/core';
import { MessageService } from '../messages.service';

@Component({
  selector: 'message-terminal',
  templateUrl: './message-terminal.component.html',
  styleUrls: ['./message-terminal.component.scss']
})
export class MessageTerminalComponent implements OnInit {
  messages = []
  constructor(public messageService: MessageService) { }
  ngOnInit() {
    this.messageService.onMessagesRetrieved((messages) => {
      this.messages = messages;
    });
  }

}

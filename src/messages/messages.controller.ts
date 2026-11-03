import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  ListMessages() {
    return 'Hello, World!';
  }
  @Get('/:id')
  getMessageById() {
    
  }
  @Post()
  createMessage() {
    return 'Message created!';
  }
}

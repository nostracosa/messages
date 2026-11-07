import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import  {CreateMessageDto} from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    // dont do this on real projects,
    //  instead use dependency injection 
    // to pass the service instance to the controller.
    this.messagesService = new MessagesService();
  }

  @Get()
  ListMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  getMessageById(@Param('id') id: any) {
    return this.messagesService.findOne(id);
  }
}

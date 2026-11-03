import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import  {CreateMessageDto} from './dtos/create-message.dto';
@Controller('messages')
export class MessagesController {

  @Get()
  ListMessages() {
    return 'Hello, World!';
  }

  @Get('/:id')
  getMessageById(@Param('id') id: any) {
    console.log('id', id);
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log('body', body); }
}

import { Controller, Get, Post, Body, Param } from '@nestjs/common';

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
  createMessage(@Body() body: any) {
    console.log('body', body); }
}

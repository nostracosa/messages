
import { readFile, writeFile } from 'fs/promises';
import {Injectable} from '@nestjs/common';

@Injectable()
export class MessageRepository {
    async findOne(id: string) {
        const content = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(content);
        
        return messages[id];
    }

    async findAll() {
        const messages = await readFile('messages.json', 'utf-8');
        return JSON.parse(messages);
    }

    async create(message: string) {
        const content = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(content);
        
        const id = Math.floor(Math.random() * 999);
        messages[id] = { id, content: message };
        await writeFile('messages.json', JSON.stringify(messages));
        return messages;

    }

}

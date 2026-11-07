
import { readFile, writeFile } from 'fs/promises';
export class MessageRepository {
    async findOne(id: string) {
        const content = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(content);
        
       // return messages.find(
       //     (msg: { id: string }) => msg.id === id
        //); 

        return messages[id];
    }

    async findAll() {
        const content = await readFile('messages.json', 'utf-8');
        return JSON.parse(content);
    }

    async create(message: string) {
        const content = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(content);
        
        const id = Math.floor(Math.random() * 999);
        messages[id] = { id, content };
        await writeFile('messages.json', JSON.stringify(messages));
        return messages;

    }

}

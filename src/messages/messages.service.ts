import { MessageRepository } from './messages.repository';

export class MessagesService {
    messagesRepository: MessageRepository;

    constructor() {
        // Service is creating its own instance of the repository, which is not ideal for testing and dependency injection.
        // ont do this on real projects, instead use dependency injection to pass the repository instance to the service.
        this.messagesRepository = new MessageRepository();
    }

    async findOne(id: string) {
        return this.messagesRepository.findOne(id);
    }

    async findAll() {
        return this.messagesRepository.findAll();
    }

    async create(content: string) {
        return this.messagesRepository.create(content);
    }
}
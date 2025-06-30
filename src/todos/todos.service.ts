import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoDto } from './dto/CreateTodo.dto';

@Injectable()
export class TodosService {
    constructor(private prisma: PrismaService){}

    createForUser(userId: number, dto: CreateTodoDto) {
        return this.prisma.todo.create({
            data: {
                title: dto.title,
                user: { connect: {id: userId} },
            }
        })
    }
}

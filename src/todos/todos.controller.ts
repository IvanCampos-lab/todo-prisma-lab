import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/CreateTodo.dto';
import { TodosService } from './todos.service';

@Controller('users/:userId')
export class TodosController {
    constructor(private readonly todoService: TodosService) {}

    @Post('todos')
    create(
        @Param('userId',ParseIntPipe) userId: number,
        @Body() dto: CreateTodoDto,){
            return this.todoService.createForUser(userId, dto);
        }
    }

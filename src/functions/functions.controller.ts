import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FunctionsService } from './functions.service';

@Controller('functions')
export class FunctionsController {
    constructor(private functionsService: FunctionsService) {}

    @Get()
    listFunctions() {
        return this.functionsService.listFunctions();
    }

    @Post()
    createFunction(
        @Body('name') name: string,
        @Body('function') func: string,
    ) {
        return this.functionsService.createFunction(name, func);
    }

    @Post(':name')
    runFunction(@Param() params) {
        return this.functionsService.runFunction(params.name);
    }
}

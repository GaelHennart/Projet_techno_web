import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AuthorsService } from './author.service';
import { CreateAuthorDto } from './author.dto';
import { UpdateAuthorDto } from './author.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get()
  async findAll() {
    return await this.authorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.authorsService.findOne(id);
  }

  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto) {
    return await this.authorsService.create(createAuthorDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return await this.authorsService.update(id, updateAuthorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.authorsService.remove(id);
  }
}

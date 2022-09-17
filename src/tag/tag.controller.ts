import { Controller, Get } from '@nestjs/common';
import { TagEntity } from './tag.entity';
import { TagService } from './tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @Get()
  async findAll(): Promise<{ tags: string[] }> {
    return this.tagService.findAll();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TagEntity } from './tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagrepository: Repository<TagEntity>,
  ) {}
  async findAll(): Promise<{ tags: string[] }> {
    const tags = await this.tagrepository.find();
    return {
      tags: tags.map((tag) => tag.name),
    };
  }
}

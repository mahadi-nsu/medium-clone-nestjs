import { Controller, Get, Post, Body } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  async getAllArticles() {
    return await 'All Articles';
  }

  @Post()
  async createArticle() {
    // return await this.articleService.createArticle(articleDto);
  }
}

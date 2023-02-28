import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  private articles: any[] = [];

  create(article: any) {
    this.articles.push(article);
  }

  findAll(): any[] {
    return this.articles;
  }

  findOne(id: number): any {
    return this.articles.find((article) => article.id === id);
  }

  update(id: number, article: any) {
    const index = this.articles.findIndex((item) => item.id === id);
    this.articles[index] = article;
  }

  delete(id: number) {
    this.articles = this.articles.filter((article) => article.id !== id);
  }
}

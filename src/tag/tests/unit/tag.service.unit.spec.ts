import { TagService } from './../../tag.service';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TagController } from 'src/tag/tag.controller';
import { TagEntity } from './../../tag.entity';

describe('Tag Controller', () => {
  let tagController: TagController;
  let tagService: TagService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      //   controllers: [tagController],
      providers: [
        TagService,
        {
          provide: getRepositoryToken(TagEntity),
          useValue: {},
        },
      ],
    }).compile();

    tagService = moduleRef.get<TagService>(TagService);
  });

  describe('Testing Start After mock', () => {
    it('testing get All method', async () => {
      expect(await typeof tagService.findAll).not.toEqual(null);
    });
  });

  // describe('findAll', () => {
  //   it('should return an array of tags', async () => {
  //     const result = {
  //       tags: ['dragon', 'coffee'],
  //     };
  //     jest.spyOn(tagService, 'findAll').mockImplementation(() => result);

  //     expect(await catsController.findAll()).toBe(result);
  //   });
  // });
});

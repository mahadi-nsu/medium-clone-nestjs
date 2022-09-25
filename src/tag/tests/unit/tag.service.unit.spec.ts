import { TagService } from './../../tag.service';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TagController } from './../../tag.controller';
import { TagEntity } from './../../tag.entity';
import { tagStub } from '../stubs/tag.stub';

//**  this is the mock data
//! it connects the ocks folder tag.service.ts

jest.mock('../../tag.service');

describe('Tag Controller', () => {
  let tagController: TagController;
  let tagService: TagService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TagController],
      providers: [TagService],
    }).compile();

    tagService = moduleRef.get<TagService>(TagService);
    tagController = moduleRef.get<TagController>(TagController);
    jest.clearAllMocks();
  });

  describe('Testing Start After mock', () => {
    it('testing getAll method', async () => {
      expect(await typeof tagService.findAll).not.toEqual(null);
    });
  });

  describe('getObject of tags', () => {
    describe('when findAll is called', () => {
      let tags: { tags: string[] };

      beforeEach(async () => {
        tags = await tagController.findAll();
      });

      test('then it should call usersService', async () => {
        expect(await tagService.findAll).toHaveBeenCalled();
      });

      test('then it should return object of tags', () => {
        expect(tags).toEqual(tagStub());
      });
    });
  });
});

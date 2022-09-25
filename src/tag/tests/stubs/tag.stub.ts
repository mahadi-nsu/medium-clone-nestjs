import { TagEntity } from './../../tag.entity';

export const tagStub = (): { tags: string[] } => {
  const data = {
    tags: ['dragon', 'coffee'],
  };
  return data;
};

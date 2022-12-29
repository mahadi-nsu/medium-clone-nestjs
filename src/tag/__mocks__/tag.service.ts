import { tagStub } from '../tests/stubs/tag.stub';

export const TagService = jest.fn().mockReturnValue({
  findAll: jest.fn().mockReturnValue(tagStub()), //! function name should be exactly same as original controller/service implementation
});

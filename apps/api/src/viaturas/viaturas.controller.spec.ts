import { Test, TestingModule } from '@nestjs/testing';
import { ViaturasController } from './viaturas.controller';

describe('ViaturasController', () => {
  let controller: ViaturasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ViaturasController],
    }).compile();

    controller = module.get<ViaturasController>(ViaturasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ViaturasService } from './viaturas.service';

describe('ViaturasService', () => {
  let service: ViaturasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViaturasService],
    }).compile();

    service = module.get<ViaturasService>(ViaturasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Injectable } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

function SomeClassDecorator<T extends new (...args: any[]) => any>(Base: T): T {
  return class extends Base {
    constructor(...args: any[]) {
      super(...args);
    }
  };
}

@Injectable()
@SomeClassDecorator
class ExtendedClass {}

@Injectable()
@SomeClassDecorator
class IntermediaryClass {
  constructor(private readonly extendedClass: ExtendedClass) {}
}

class ExtendingClass {
  constructor(private readonly intermediaryClass: IntermediaryClass) {}
}

describe('ExtendingClass', () => {
  let extendingClass: ExtendingClass;
  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      providers: [ExtendedClass, IntermediaryClass, ExtendingClass],
    }).compile();
    extendingClass = testingModule.get<ExtendingClass>(ExtendingClass);
  });
  it('should be defined', () => {
    expect(extendingClass).toBeDefined();
  });
});

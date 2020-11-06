import { Injectable } from '@nestjs/common';

function SomeClassDecorator<T extends new (...args: any[]) => any>(Base: T): T {
  return class extends Base {
    constructor(...args: any[]) {
      super(...args);
    }
  };
}

@Injectable()
@SomeClassDecorator
export class ExtendedClass {}

@Injectable()
@SomeClassDecorator
export class IntermediateClass {
  constructor(private readonly extendedClass: ExtendedClass) {}
}

@Injectable()
export class AppService {
  constructor(private readonly intermediaryClass: IntermediateClass) {
  }
  getHello(): string {
    return 'Hello World!';
  }
}

import Greeter from '../lib/index';

describe('Greeter', () => {

  let greeter = new Greeter();

  it('does a thing', () => {
    expect(greeter).toBeDefined();
    expect(greeter.greet()).toEqual('Hello fuck');
    expect(greeter.greet('Jason')).toEqual('Hello Jason');
  });
});



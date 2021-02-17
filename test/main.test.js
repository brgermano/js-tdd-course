/* eslint-disable */
describe('Main', () => {
  
  //roda uma vez, antes do bloco
  before(() => {
    console.log('before');
  });

  // roda uma vez, depois do bloco
  after(() => {
    console.log('after');
  });

  //roda todas as vezes, antes de cada bloco
  beforeEach(() => {
    console.log('beforeEach');
  });

  //roda todas as vezes, depois de cada bloco
  afterEach(() => {
    console.log('afterEach');
  });

  it('test 1', () => {
    console.log('test 1');
  });

  it('test 2', () => {
    console.log('test 2');
  });

});
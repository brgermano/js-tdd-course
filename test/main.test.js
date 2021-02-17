/*
describe separa os grandes blocos

dentro de um describe podemos criar outros
para testar os metodos por exemplo

e dentro desses sub-describes podemos criar os
contextos

it é oq de fato vai rodar

*/
/* eslint-disable */
describe('Main', () => {
  describe('Method A', () => {
    context('Case 1', () => {
      // skip diz pro mocha pra pular esse teste
      it.skip('sould happen sum 2 with 2 and return 4', () => {
        // espera que aconteça
        // Entra de dados / metodo sum(2,2)
        // Espera retornar (4) => true | (3) => false => broken test
        throw new Error('just on error');
      });
    });

    //only diz que quero rodar somente esse bloco
    context.only('Case 2', () => {
      it('sould happen mimi', () => {
        // espera que aconteça
        // Entra de dados / metodo sum(2,2)
        // Espera retornar (4) => true | (3) => false => broken test
        throw new Error('just on error');
      });

      it('sould happen blabla', () => {
        // espera que aconteça
        // Entra de dados / metodo sum(2,2)
        // Espera retornar (4) => true | (3) => false => broken test
      });
    });
  });

  describe('Method B', () => {
    
  });
})
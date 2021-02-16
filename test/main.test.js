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
      it('sould happen sum 2 with 2 and return 4', () => {
        // espera que aconteça
        // Entra de dados / metodo sum(2,2)
        // Espera retornar (4) => true | (3) => false => broken test
      });
    });

    context('Case 2', () => {
      it('sould happen mimi', () => {
        // espera que aconteça
        // Entra de dados / metodo sum(2,2)
        // Espera retornar (4) => true | (3) => false => broken test
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
// import metodo from 'biblioteca';
// * carrega tudo da lib
// as => alias para método (novo nome)
import * as R from 'ramda';

import sum from './utils';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1];

const arr3 = R.union(arr1, arr2);

const arr4 = R.uniq(arr1);

// eslint-disable-next-line no-console
console.log(arr3);

// eslint-disable-next-line no-console
console.log(arr4);

// eslint-disable-next-line no-console
console.log(sum(2, 2));

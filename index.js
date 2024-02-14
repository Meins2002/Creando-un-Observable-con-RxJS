import {of} from 'rxjs';
import {map} from 'rxjs/operators';

of(0,1,2,3,4,5,6,7,8,9).pipe(
    map(numero => {
      if (numero % 2 !== 0) {
        return numero;
      }
    })
  ).subscribe(numeroImpar => {
    console.log(numeroImpar);
  });
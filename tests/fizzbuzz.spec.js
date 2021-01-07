/* Desafio */

/*
	
	Escreva uma lib que receba uma número e:

	Se o número for divisivel por 3, no lugar do número escreva 'Fizz'
	Se o número for divisivel por 5, no lugar do número escreva 'Buzz'
	Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz'
	Se não for múltiplo de nada, retorna o número
	
*/

import { expect } from 'chai';
import FizzBuzz from '../src/fizzbuzz';

describe('FizzBuzz', () => {

	it('should return `Fizz` when multiple of 3', () => {
		expect(FizzBuzz(3)).to.be.equal('Fizz');
		expect(FizzBuzz(6)).to.be.equal('Fizz');
	});

	it('should return `Buzz` when multiple of 5', () => {
		expect(FizzBuzz(10)).to.be.equal('Buzz');
		expect(FizzBuzz(20)).to.be.equal('Buzz');
	});

	it('should return `FizzBuzz` when multiple of 3 and 5', () => {
		expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
		expect(FizzBuzz(30)).to.be.equal('FizzBuzz');
	});

	it('should return parameter number when  non-multiple of 5 neither of 3', () => {
		expect(FizzBuzz(13)).to.be.equal(13);
	});

	it('should return zero when pass parameter equal 0', function() {
		expect(FizzBuzz(0)).to.be.equal(0);
	});
	
})
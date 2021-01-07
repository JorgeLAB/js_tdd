import { expect } from 'chai';
import { sum, div, mult, sub } from '../src/main';

describe('Calc', () => {
	// smoke tests
	describe('Smoke tests', () => {
		it('should exist the calc lib', () => {
			expect(sum).to.exist;
		});

		it('should exist the calc lib', () => {
			expect(sub).to.exist;
		});

		it('should exist the calc lib', () => {
			expect(mult).to.exist;
		});

		it('should exist the calc lib', () => {
			expect(div).to.exist;
		});

		it('should exist the method `sum`', () => {
			expect(sum).to.exist;
		});
		
		it('should exist the method `sub`', () => {
			expect(sub).to.exist;
		});
		
		it('should exist the method `mult`', () => {
			expect(mult).to.exist;
		});
		
		it('should exist the method `div`', () => {
			expect(div).to.exist;
		});
	});

	describe('Sum', () => {
		it('should return 4 when `sum(2,2)`', () => {
			expect(sum(2,2)).to.be.equal(4);
		});		
	});

	describe('Sub', () => {

		it('should return 6 when `sub(9,3)`', () => {
			expect(sub(9,3)).to.be.equal(6);
		});		

		it('should return -4 when `sub(6,8)`', () => {
			expect(sub(6,8)).to.be.equal(-2);
		});
	});

	describe('Mult', () => {
		it('should return 6 when `mult(9,3)`', () => {
			expect(mult(9,3)).to.be.equal(27);
		});

		it('should return -9 when `mult(3,-3)`', () => {
			expect(mult(3,-3)).to.be.equal(-9);
		})		
	});

	describe('Div', () => {
		it('should return 2 when `div(4,2)`', () =>  {
			expect(div(4,2)).to.be.equal(2);
		});

		it('should return `Não é possivel divisão por zero!` when disvisor by 0', () => {
			expect(div(4, 0)).to.be.equal("Não é possível dividir por zero")
		})
	});

});
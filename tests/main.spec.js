var expect = require('chai').expect;

describe('Main', function() {
	var arr;

	before(function(){
		console.log('before');
		//auma vez antes do bloco
	});

	after(function(){
		console.log('after');

		// uma vez depois do bloco 
	});

	beforeEach(function(){
		console.log('beforeEach');
		arr = [1,2,3]; 
		// antes d cada bloco
	});	

	afterEach(function(){
		console.log('afterEach');
		// depis de cada teste
	});

	// teste de tipos ou existes ( smoke test )

	it('should be an array', function(){
		expect(arr).to.have.a('array');
	})

	it('should have a size of 4 when push another value to the array', function(){
		arr.push(4);
		expect(arr).to.have.lengthOf(4);
	});

	it('should return true when pop 3 from the array', function(){
		expect(arr.pop() === 3).to.be.true;
	});

	it('should have a size of 2 when pop a value from the array', function(){
		arr.pop();
		expect(arr).to.have.lengthOf(2)
	});

	it('should remove the value 3 when use pop in the array', function(){
		arr.pop()
		expect(arr).to.not.include(3);
	});

});
import { Result } from './Result';

describe('Result', () => {
	describe('ok', () => {
		it('should create a new instance of Result if successful', () => {
			const result = Result.ok('message');

			expect(result).toBeDefined();
		});
	});

	describe('error', () => {
		it('should create a new instance of Result if error', () => {
			const result = Result.error(new Error('Invalid argument'));

			expect(result).toBeDefined();
		});
	});

	describe('isSuccess', () => {
		it('should return false if Result is not successful', () => {
			const result = Result.error(new Error('Invalid args'));

			expect(result.isSuccess).toBeFalsy();
		});

		it('should return true if Result is successful', () => {
			const result = Result.ok('value');

			expect(result.isSuccess).toBeTruthy();
		});
	});

	describe('value', () => {
		it('should return the correct value if result is successful', () => {
			const result = Result.ok('value');

			expect(result.value).toEqual('value');
		});

		it('should throw an error if result is not successful', () => {
			const result = Result.error(new Error('Invalid args'));

			expect(() => result.value).toThrowError();
		});
	});

	describe('error', () => {
		it('should return the error if result is not successful', () => {
			const result = Result.error(new Error('Invalid args'));

			expect(result.error).toEqual(new Error('Invalid args'));
		});
	});
});

import { Result } from './Result';

describe('Result', () => {
	describe('ok', () => {
		it('should create a new instance of result if successful', () => {
			const result = Result.ok('message');

			expect(result).toBeDefined();
			expect(result.isSuccess).toBeTruthy();
		});
	});

	describe('fail', () => {
		it('should create a new instance of result if error', () => {
			const result = Result.fail(new Error('Invalid argument'));

			expect(result).toBeDefined();
			expect(result.isSuccess).toBeFalsy();
		});
	});

	describe('isSuccess', () => {
		it('should return false if result is not successful', () => {
			const result = Result.fail(new Error('Invalid args'));

			expect(result.isSuccess).toBeFalsy();
		});

		it('should return true if result is successful', () => {
			const result = Result.ok('value');

			expect(result.isSuccess).toBeTruthy();
		});
	});

	describe('isFailure', () => {
		it('should return true if result is not successful', () => {
			const result = Result.fail(new Error('Invalid args'));

			expect(result.isFailure).toBeTruthy();
		});

		it('should return false if result is successful', () => {
			const result = Result.ok('value');

			expect(result.isFailure).toBeFalsy();
		});
	});

	describe('value', () => {
		it('should return the correct value if result is successful', () => {
			const result = Result.ok('value');

			expect(result.value).toEqual('value');
		});

		it('should throw an error if result is not successful', () => {
			const result = Result.fail(new Error('Invalid args'));

			expect(() => result.value).toThrowError();
		});

		it('should throw an error if value is undefined', () => {
			const result = Result.ok(undefined);

			expect(() => result.value).toThrowError();
		});
	});

	describe('error', () => {
		it('should return the error if result is not successful', () => {
			const result = Result.fail(new Error('Invalid args'));

			expect(result.error).toEqual(new Error('Invalid args'));
		});
	});
});

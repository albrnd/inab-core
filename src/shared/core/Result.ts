export class Result<T> {
	private _value: T;
	public readonly error: Error;
	public readonly isSuccess: boolean;

	private constructor(value: T, error: Error, isSuccess: boolean) {
		this._value = value;
		this.error = error;
		this.isSuccess = isSuccess;
	}

	static ok<T>(value: T) {
		return new Result(value, undefined, true);
	}

	static error<T>(error: Error) {
		return new Result(undefined, error, false);
	}

	get value(): T {
		if (!this.isSuccess) {
			throw new Error('Unable to get the value of a failed result');
		}

		return this._value;
	}
}

export class Result<T> {
	private _value: T | undefined;
	public readonly error: Error | undefined;
	public readonly isSuccess: boolean;

	private constructor(isSuccess: boolean, value?: T, error?: Error) {
		this._value = value;
		this.error = error;
		this.isSuccess = isSuccess;
	}

	static ok<T>(value: T): Result<T> {
		return new Result<T>(true, value, undefined);
	}

	static fail<U>(error: Error): Result<U> {
		return new Result<U>(false, undefined, error);
	}

	get value(): T {
		if (!this.isSuccess || !this._value) {
			throw new Error('Unable to get the value of a failed result');
		}

		return this._value;
	}
}

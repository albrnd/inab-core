export class Guard {
	static isNotNullOrUndefined(
		value: any,
		valueType: string
	): Error | undefined {
		if (value === null || value === undefined) {
			return new Error(`${valueType} is null or undefined.`);
		}
	}
}

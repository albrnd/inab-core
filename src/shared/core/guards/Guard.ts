export class Guard {
	static isNotNullOrUndefined(value: any, valueType: string) {
		if (value === null || value === undefined) {
			throw new Error(`${valueType} is null or undefined.`);
		}
	}
}

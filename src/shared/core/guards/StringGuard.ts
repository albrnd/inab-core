export class StringGuard {
	static isNotEmpty(value: string): Error | undefined {
		if (value.length === 0) {
			return new Error('Invalid length');
		}
	}
}

// FIXME: refactor with more finesse
export class StringGuard {
	static isNotEmpty(value: string) {
		if (value.length === 0) {
			throw new Error('Invalid length');
		}
	}
}

import { v4 as uuidv4, validate } from 'uuid';

export class Guid {
	constructor(private value?: string) {
		this.value = value && validate(value) ? value : uuidv4();
	}
}

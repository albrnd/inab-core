import { ObjectId } from 'bson';

export class Guid {
	_id: ObjectId;

	constructor(value?: string) {
		this._id = ObjectId.isValid(value) ? new ObjectId(value) : new ObjectId();
	}

	get value(): string {
		return this._id.toString();
	}

	static init() {
		return new ObjectId().toString();
	}
}

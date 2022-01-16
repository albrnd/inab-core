import { Guid } from './Guid';

export abstract class Entity<T> {
	protected readonly _id: Guid;
	protected readonly props: T;

	constructor(props: T, id: Guid) {
		this.props = props;
		this._id = id || new Guid();
	}

	get id(): Guid {
		return this._id;
	}
}

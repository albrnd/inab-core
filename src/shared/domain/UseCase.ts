import { Result } from 'shared/core/Result';

export interface UseCase<IRequest, IResponse> {
	execute(request?: IRequest): Promise<IResponse> | IResponse;
}

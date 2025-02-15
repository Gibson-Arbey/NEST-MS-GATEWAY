import { Catch, ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class RpcCustomExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const rpcError = exception.getError();

    if (
      typeof rpcError === 'object' &&
      rpcError !== null &&
      'status' in rpcError &&
      'message' in rpcError
    ) {
      const status = isNaN(Number((rpcError as any).status))
        ? 400
        : Number((rpcError as any).status);
      return response.status(status).json(rpcError);
    }

    // Si el error no cumple con el formato esperado
    response.status(400).json({
      status: 400,
      message: rpcError,
    });
  }
}

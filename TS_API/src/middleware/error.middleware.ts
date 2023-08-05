import { NextFunction, Request, Response } from 'express';
import Respuesta from './Respuesta';

export function errorMiddleware(error: any, request: Request, response: Response, next: NextFunction) {
  if(error instanceof Respuesta){
    next(error)
    return;
  }
  
  const status = 500;
  const message = error.message || 'Something went wrong';
  response
    .status(status)
    .send({
      status,
      message
    });
}

export function respuestaMiddleware(respuesta: Respuesta, request: Request, response: Response, next: NextFunction) {
  const status = 203;
  const message = respuesta;
  response
    .status(status)
    .send({
      status,
      message
    });
}

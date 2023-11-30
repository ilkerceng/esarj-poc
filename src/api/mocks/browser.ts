import { setupWorker } from 'msw/browser';
import { getSwaggerEsarjMock } from '../generated/esarj-api.msw';

export const worker = setupWorker(...getSwaggerEsarjMock());

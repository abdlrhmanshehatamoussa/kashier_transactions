import express from 'express';
import { ping } from './endpoints/ping';

function addRoutes(app: express.Application): void {
    app.route('/').get(ping)
}
export default addRoutes;
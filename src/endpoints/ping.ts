import express from 'express';

export function ping(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(200).json({
        timestamp: (new Date).toISOString()
    });
}
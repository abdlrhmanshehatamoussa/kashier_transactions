import express from 'express';

export function ping(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(200).json({
        message : "Welcome to Kashier Transactions Service",
        timestamp: (new Date).toISOString()
    });
}
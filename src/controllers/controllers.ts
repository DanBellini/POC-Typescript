import { Request, Response } from "express";

async function checkApiHealth (req: Request, res:Response) {



    return res.send(`API response correct`)
}

export {checkApiHealth}
import { ObjectSchema } from "joi";
import { Reminder } from "../protocols/protocols.js";
import { NextFunction, Response, Request } from "express";

function validationSchema(schema: ObjectSchema<Reminder>, err: number):ValidationMiddleware{
    return (req: Request, res: Response, next: NextFunction) => { 
      const {error} = schema.validate(req.body, {abortEarly: false});
      if (error) {
        return res.status(err).send(error.details.map((detail: { message: string; }) => detail.message));
      }
  
      next();
    }
}

type ValidationMiddleware = (req: Request, res: Response, next: NextFunction)=> void;


export { validationSchema };
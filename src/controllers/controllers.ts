import { Request, Response } from "express";
import { insertIntoNewReminder, selectAllStickNotes } from "../repositories/repository.js";
import { validateDescription } from "../services/services.js";

async function checkApiHealth (req: Request, res:Response) {

    return res.send(`API response correct`)
}

async function postNewStickyNotes(req:Request, res:Response) {
    const { description } = req.body

    const error = validateDescription(description)
    if(error) return res.send(error).status(400);
    try {
        await insertIntoNewReminder(description)

        res.sendStatus(201);
    } catch (error) {
        console.log(error)
        return res.sendStatus(500);
    }
}

async function getAllStickyNotes(req: Request, res:Response) {
    try {

        const result = await selectAllStickNotes();

        if(!result.rows[0]) return res.status(200).send(`Nothing stickys Notes`)

        return res.status(200).send(result.rows)      
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
}

export {checkApiHealth, postNewStickyNotes, getAllStickyNotes}
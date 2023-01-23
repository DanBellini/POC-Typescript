import { Request, Response } from "express";
import { deleteStickyNoteFromId, insertIntoNewReminder, selectAllStickNotes, selectOneStickNote,updateStickyNoteFromId } from "../repositories/repository.js";
import { validateDescription } from "../services/services.js";

async function checkApiHealth (req: Request, res:Response) {

    return res.send(`API response correct`);
}

async function postNewStickyNotes(req:Request, res:Response) {
    const { description } = req.body;

    const error = validateDescription(description);
    if(error) return res.send(error).status(400);
    try {
        await insertIntoNewReminder(description);

        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

async function getAllStickyNotes(req: Request, res:Response) {
    try {
        const result = await selectAllStickNotes();

        if(!result.rows[0]) return res.status(200).send(`Nothing Stickys Notes`);

        return res.status(200).send(result.rows);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

async function updateStickyNote(req:Request, res:Response) {
    const params = req.params.id;

    const id = Number(params);
    try {
        const search = await selectOneStickNote(id);
        if(!search.rows[0]) return res.status(400).send(`not find Sticky Note`);

        const valueDone = search.rows[0].done;
        const done = !valueDone;

        await updateStickyNoteFromId(done, id);

        return res.status(200).send(`update Sticky Note from id=${id}`);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);  
    }
}
async function deleteStickyNote(req:Request, res:Response){
    const params = req.params.id;

    const id = Number(params)
    try {
        const search = await selectOneStickNote(id);
        if(!search.rows[0]) return res.status(400).send(`not find Sticky Note`);

        await deleteStickyNoteFromId(id);
        return res.status(200).send(`Sticky Note from id = ${id} deleted`);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}
export {checkApiHealth, postNewStickyNotes, getAllStickyNotes, updateStickyNote, deleteStickyNote}
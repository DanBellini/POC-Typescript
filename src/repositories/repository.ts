import connectionDB from "../database/database.js";
import { QueryResult } from "pg";
import { Reminder } from "../protocols/protocols.js";

function insertIntoNewReminder (description:string){
    return connectionDB.query(`
    INSERT INTO sticky_notes
        (description)
        VALUES 
        ($1);
    `,[description]);
};

function selectAllStickNotes(): Promise<QueryResult<Reminder>> {
    return connectionDB.query(`
    SELECT * FROM sticky_notes
    `);
};

function selectOneStickNote(id:Number): Promise<QueryResult<Reminder>>{
    return connectionDB.query(`
    SELECT * FROM sticky_notes WHERE id=$1
    `,[id]);
};

function updateStickyNoteFromId(done:Boolean, id:Number):Promise <QueryResult<Reminder>>{
    return connectionDB.query(`
    UPDATE sticky_notes
	SET done = $1
	WHERE id = $2
    `,[done, id]);
};

function deleteStickyNoteFromId(id:Number){
    return connectionDB.query(`
    DELETE FROM sticky_notes
	WHERE id=$1
    `,[id]);
};

export {insertIntoNewReminder, selectAllStickNotes, selectOneStickNote, updateStickyNoteFromId, deleteStickyNoteFromId};
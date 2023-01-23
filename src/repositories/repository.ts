import connectionDB from "../database/database.js";
import { QueryResult } from "pg";
import { reminder } from "../protocols/protocols.js";

function insertIntoNewReminder (description:string){

    return connectionDB.query(`
    INSERT INTO sticky_notes
        (description)
        VALUES 
        ($1);
    `,[description])
}

function selectAllStickNotes(): Promise<QueryResult<reminder>> {
    return connectionDB.query(`
    SELECT * FROM sticky_notes
    `)
}

export {insertIntoNewReminder, selectAllStickNotes};
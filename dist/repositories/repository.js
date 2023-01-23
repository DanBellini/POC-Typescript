import connectionDB from "../database/database.js";
function insertIntoNewReminder(description) {
    return connectionDB.query("\n    INSERT INTO sticky_notes\n        (description)\n        VALUES \n        ($1);\n    ", [description]);
}
;
function selectAllStickNotes() {
    return connectionDB.query("\n    SELECT * FROM sticky_notes\n    ");
}
;
function selectOneStickNote(id) {
    return connectionDB.query("\n    SELECT * FROM sticky_notes WHERE id=$1\n    ", [id]);
}
;
function updateStickyNoteFromId(done, id) {
    return connectionDB.query("\n    UPDATE sticky_notes\n\tSET done = $1\n\tWHERE id = $2\n    ", [done, id]);
}
;
function deleteStickyNoteFromId(id) {
    return connectionDB.query("\n    DELETE FROM sticky_notes\n\tWHERE id=$1\n    ", [id]);
}
;
export { insertIntoNewReminder, selectAllStickNotes, selectOneStickNote, updateStickyNoteFromId, deleteStickyNoteFromId };

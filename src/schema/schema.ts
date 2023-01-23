import joi from "joi";
import { Reminder } from "../protocols/protocols.js";

const sticky_note = joi.object<Reminder>({
    description: joi.string().required()
});

export default sticky_note;
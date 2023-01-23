import joi from "joi"
import { reminder } from "../protocols/protocols"

const sticky_note = joi.object<reminder>({
    description: joi.string().required()
})

export default sticky_note
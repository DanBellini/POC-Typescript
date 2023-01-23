import joi from "joi";
var sticky_note = joi.object({
    description: joi.string().required()
});
export default sticky_note;

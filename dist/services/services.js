function validateDescription(description) {
    var err = "";
    if (description.length < 4 || description.length > 120) {
        return err = "Description is invalid";
    }
    return err = "";
}
;
export { validateDescription };

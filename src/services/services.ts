
function validateDescription (description: string): string{

    let err:string = "";

    if (description.length < 4 || description.length > 120){
        return err = `Description is invalid`;
    }
    return err = "";
}

export {validateDescription};
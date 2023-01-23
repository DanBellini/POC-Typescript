function validationSchema(schema, err) {
    return function (req, res, next) {
        var error = schema.validate(req.body, { abortEarly: false }).error;
        if (error) {
            return res.status(err).send(error.details.map(function (detail) { return detail.message; }));
        }
        next();
    };
}
export { validationSchema };

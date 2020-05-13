const { body, validationResult } = require('express-validator');

exports.validInputs = () => {
    return [
        body('email')
            .notEmpty()
            .isEmail()
            .normalizeEmail({ all_lowercase: true })
            .withMessage('invalid email'),

        body('password')
            .isLength({ min: 8 })
            .withMessage('password is too short'),

        body('lastName')
            .notEmpty()
            // .exist()
            .trim()
            .escape()
            .withMessage('please give us your last name'),

        // checking errors with the validator function
        (req, res, next) => {
            let errors = validationResult(req)

            if (!errors.isEmpty()) {
                console.log(errors)
                let err = errors.errors.map(er => ({ [er.param]: er.msg }))
                return res.json({ status: 203, message: err })

                // last line very important cause we are sending an object format to the error catcher in the app.js. Other way it wont work
            }
            next()
        }
    ]
}
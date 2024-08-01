


const authValidate = (schema) => async(req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        console.log(err);
        const message = err.errors.map(msg => msg.message)
        res.status(400).json({message: 'not validated', message})
    }
}

export {authValidate}
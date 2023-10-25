// list-edit-middleware.js

const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ error: 'Cuerpo de solicitud vacío o formato JSON inválido' });
    }

    if (err instanceof ValidationError) {
        return res.status(400).json({ error: 'Datos no válidos o atributos faltantes' });
    }

    next();
};

module.exports = errorHandlerMiddleware
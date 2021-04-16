
export const handleError = (res, error) => {
    res.status(500).json({
        ok: false,
        message: 'Hubo un error procesando la solicitud',
        error
    })
}
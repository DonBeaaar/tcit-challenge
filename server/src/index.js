import 'dotenv/config'
import app from './app';

const startServer = () => {
    app.listen(process.env.PORT, () => {
        console.log(`Servidor en el puerto ${process.env.PORT}`);
    })
}

startServer();
const app = require('./src/app')
const { app: { port } } = require('./src/config/config.app')
const PORT = port
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})
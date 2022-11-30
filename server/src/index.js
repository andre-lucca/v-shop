const app = require('express')()
const routes = require('./routes')

app.use(routes)

app.listen(8000, () => console.log('Server running on: http://localhost:8000'))
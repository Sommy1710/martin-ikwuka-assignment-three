import express from 'express'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import helmet from 'helmet'
import { createServer } from 'http'
import listRoutes from 'express-list-routes'
import { appRouter } from '../routes/web.js'

const app = express()
const server = createServer(app)

app.use (express.json())
app.use (express.urlencoded ({extended: true}))
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())
app.use(compression ())

app.get('/health', (req, res) => res.json({success: true, message: 'server is running'}))

app.use('/api/v1', appRouter);

app.use('*', (req, res) =>
{
    const url = req.originalUrl;
    return res.status(404).json({success: false, message: `route ${url} does not exist on this server`});
})


listRoutes(app)

export {
    server, app
}


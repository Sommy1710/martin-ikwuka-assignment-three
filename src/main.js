import {server} from './bootstrap/server.js'

(() =>
{
    try {
        server.listen(5000, ()=>{
            console.info('this awesome server is listening on port 5000')
        })
    } catch (error) {
        console.error('could not start server', error)
        process.exit(1)
    }
}) ()
import express from 'express'
import cors from 'cors'
import usersRoutes from './router/music.routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/music',usersRoutes)

app.listen(9291, () => console.log('Server is running on http://localhost:9291'))
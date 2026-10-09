import jwt from 'jsonwebtoken'

const SECRET = 'mimos4'

export default async function authMiddleware(req, res, next) {
    try {
        const token = req.headers['authorization']

        if(!token) {
            throw new Error()
        }

        const decoded = jwt.verify(token, SECRET)

        req.session = decoded
        next()
    }
    catch {
        res.send({ message: "Usuário ou senha inválido"})
    }
}
// controller/user.js
import ServiceUser from "../service/user.js";

class ControllerUser {

    async Buscar(req, res) {
        try {
            const users = await ServiceUser.Buscar();
            return res.status(200).send({ users });
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id;
            const user = await ServiceUser.Detalhe(id);

            return res.status(200).send({ user });
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    async Criar(req, res) {
        try {
            const { name, email, password } = req.body;

            const userCriar = await ServiceUser.Criar(
                name, email, password
            );

            return res.status(201).send({
                message: "Usuário criado com sucesso!",
                user: userCriar
            });
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.params.id;
            const { name, email, password } = req.body;

            const user = await ServiceUser.Alterar(
                id, name, email, password
            );

            return res.status(200).send({ user });
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.params.id;

            await ServiceUser.Deletar(id);

            return res.status(204).send();
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    async Login(req, res) {
        try {
            const { email, password } = req.body;

            const user = await ServiceUser.Login(email, password);

            return res.status(200).send({ user });
        } catch (error) {
            return res.status(401).send({ message: error.message });
        }
    }
}

export default new ControllerUser();
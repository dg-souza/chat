import users from "../models/user.js";

class UserService {
    static async createUser(userName) {
        try {
            const newUser = await users.create({ name: userName })

            return newUser
        } catch(err) {
            throw new Error('Erro ao criar usuario: '+ err.message)
        }
    }
}

export default UserService
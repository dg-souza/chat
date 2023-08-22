import users from "../models/user.js";

class UserService {
    static async createUser(obj) {
        try {
            let user = await users.findOne({ email: obj.email })

            if(!user) {
                user = await users.create(obj)
            }

            return user
        } catch(err) {
            throw new Error('Erro ao criar usuario: '+ err.message)
        }
    }
}

export default UserService
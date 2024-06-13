import { deleteMenu, findAll, findById, postMenu, updateMenu } from "../queries/queries.js";

class menuService {
    async getAllService(req, res) {
        try {
            const menu = await findAll();
            return { menu };
        } catch (error) {
            return { error: error.message };
        }
    }
    async postMenuService(req, res) {
        const { title, description, price, type, photo, grams } = req
        if (!title || !description || !price || !type || !photo || !grams) {
            return res.status(403).json({ message: 'All fields are required' })
        }
        try {
            const menu = await postMenu(title, description, price, type, photo, grams)
            return res.status(201).json({ menu })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async deleteMenuService(req, res) {
        const id = req
        try {
            const menu = await deleteMenu(id)
            if (!menu) {
                return { error: 'Menu not found' }
            }
            return menu
        } catch (error) {
            return { error: error.message }
        }
    }
    async updateMenuService(req, res) {
        const { title, description, price, type, photo, grams } = req.body
        const id = req.params.id
        if (!title || !description || !price || !type || !photo || !grams) {
            return res.status(403).json({ message: 'All fields are required' })
        }
        try {
            const menu = await updateMenu(id, title, description, price, type, photo, grams)
            console.log(menu)
            if (!menu) {
                return { error: 'Menu not found' }
            }
            return menu
        } catch (error) {
            return { error: error.message }
        }
    }
}
export default new menuService()

import FileService from '../service/FileService.js';
import menuService from '../service/menuService.js';
class menuController {
    async getAllController(req, res) {
        try {
            const menu = await menuService.getAllService();
            return res.json(menu);
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    };
    async postMenuController(req, res) {
        try {
            // const fileName = FileService.saveFile(picture)
            // const createdPost = await Post.create({ ...post, picture: fileName })
            const menu = await menuService.postMenuService(req.body);
            return res.json(menu);
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    };
    async deleteMenuController(req, res) {
        try {
            const menu = await menuService.deleteMenuService(req.params.id);
            return res.json(menu);
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    };
    async updateMenuController(req, res) {
        try {
            const menu = await menuService.updateMenuService(req);
            return res.json(menu);
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    };
};

export default new menuController();

import { Router } from "express";
import menuController from "./Controllers/menuController.js";
const router = new Router()

router.get('/menu', menuController.getAllController)
router.post('/menu/post', menuController.postMenuController)
router.put('/menu/update/:id', menuController.updateMenuController)
router.delete('/menu/delete/:id', menuController.deleteMenuController)
// router.post('/events', eventsController.create)

export default router
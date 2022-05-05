import { Router } from "express";
import userMappers from "../mappers/user.mappers";
import userService from "../service/user.service";

const router = Router()

router.get('/', (req, res) => {

  userService.findAll()
    .then(users => res.json(users) )
    .catch(err => res.status(500).json({ message: 'Error while retriving users', error: err }) )

})

router.post('/', (req, res) => {
  userService.create(userMappers(req.body))
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).json({ message: 'Error while create users', error: err }) )
})


router.delete('/:id', (req, res) => {
  userService.deleteOne(+req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).json({ message: 'Error while delete users', error: err }) )
})

router.put('/:id', (req, res) => {
  userService.updata(+req.params.id, userMappers(req.body))
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).json({ message: 'Error while update users', error: err }))
})

export default router
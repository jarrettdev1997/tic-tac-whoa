const router = require('express').Router();
const { Board } = require('../../model')
// const withAuth = require('../../utils/auth')

router.get('/', (req, res) => {
    Board.findAll()
    .then(dbBoardData => res.json(dbBoardData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
})

router.get('/:id', (req, res) => {
    Board.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbBoardData => res.json(dbBoardData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
})

router.post('/', (req, res) => {
    Board.create({
        upper_left: req.body.upper_left,
        upper_mid: req.body.upper_mid,
        upper_right: req.body.upper_right,
        center_left: req.body.center_left,
        center_mid: req.body.center_mid,
        center_right: req.body.center_right,
        lower_left: req.body.lower_left,
        lower_mid: req.body.lower_mid,
        lower_right: req.body.lower_right,
    })
    .then(dbBoardData => res.json(dbBoardData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
})

router.put('/:id', (req, res) => {
    Board.update({
        upper_left: req.body.upper_left,
        upper_mid: req.body.upper_mid,
        upper_right: req.body.upper_right,
        center_left: req.body.center_left,
        center_mid: req.body.center_mid,
        center_right: req.body.center_right,
        lower_left: req.body.lower_left,
        lower_mid: req.body.lower_mid,
        lower_right: req.body.lower_right,
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(dbBoardData => res.json(dbBoardData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
})

module.exports = router
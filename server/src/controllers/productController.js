const db = require('../data/db.json')

const getAllProducts = (req, res) => {
    res.json(db.products.items)
}

module.exports = {
    getAllProducts
}
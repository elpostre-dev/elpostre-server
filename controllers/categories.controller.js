const Categories = require('../models/categories.model')

exports.getCats = async function (req, res, next) {
    const cats = await Categories.query().modify('getCategories')

    res.status(200).json({
        status: 'success',
        data: cats
    })
}


exports.getCat = async function (req, res, next) {
    const { sCategoryId } = req.params
    const cat = await Categories.query().modify('getCategory', { sCategoryId })

    res.status(200).json({
        status: 'success',
        data: cat
    })
}

exports.createCat = async function (req, res, next) {
    const { sName } = req.body

    const newCat = await Categories.query().modify('createCategory', {
        sName
    })

    res.status(201).json({
        status: 'success',
        data: newCat
    })
}
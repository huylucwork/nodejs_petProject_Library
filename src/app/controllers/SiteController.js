const course = require('../models/course.js');
const { mutipleToObject } = require('../../util/mongooseToObject');
class SiteController{
    // [GET] /
    home(req, res, next){
        course.find({})
            .then (course => {
                res.render('home', { 
                    course : mutipleToObject(course)
                });
            })
            .catch(next)
        // res.render('home');
    }

    // [GET] /search
    search(req, res){
        res.render('search');
    }
}

module.exports = new SiteController;
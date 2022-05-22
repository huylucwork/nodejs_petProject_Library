const Course = require('../models/course.js');
const { mutipleToObject } = require('../../util/mongooseToObject');
class MeController{
    // [GET] /me/stored/courses
    storeCourses(req, res, next){
        Course.find({})
            .then(courses => res.render('me/store-courses', {
                courses: mutipleToObject(courses)
            })) 
            .catch(next);
    }
}

module.exports = new MeController;
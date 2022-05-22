const Course = require('../models/course.js');
const { singleToObject } = require('../../util/mongooseToObject');
class CourseController{
    // [GET] /create
    create(req, res, next){
        res.render('courses/create');
    }

    // [GET] /:slug
    show(req, res, next){
        Course.findOne({slug: req.params.slug})
            .then (course => {
                res.render('courses/show', {course: singleToObject(course)});
            })
            .catch(next);
    }

    // [POST] /stored
    store(req, res, next){
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/')) 
            .catch(next);
    }

    // [GET] /:id/edit
    edit(req, res, next){
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: singleToObject(course)
            }))
            .catch(next);
    }

    // [PUT] /:id
    update(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }
    
    // [DELETE] /course/:id
    delete(req, res, next){
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new CourseController;
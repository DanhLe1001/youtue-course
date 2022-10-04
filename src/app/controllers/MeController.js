const Course = require('../model/course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    //get   me/strote/courses
    storeCourses(req, res, next) {
        Course.find({})
            .then((course) => {
                res.render('me/store-courses', { course: mutipleMongooseToObject(course) });
            })
            .catch(next);
    }
}

module.exports = new MeController();
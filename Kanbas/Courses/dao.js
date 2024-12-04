//import Database from "../Database/index.js";
import model from "./model.js";
export function deleteCourse(courseId) {
    const { courses, enrollments } = Database;
    Database.courses = courses.filter((course) => course._id !== courseId);
    Database.enrollments = enrollments.filter(
        (enrollment) => enrollment.course !== courseId
    );
}
export function findAllCourses() {
    // return Database.courses;
    return model.find();
}
export function findCoursesForEnrolledUser(userId) {
    const { courses, enrollments } = model;
    const enrolledCourses = courses.filter((course) =>
        enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
    return enrolledCourses;
}
export function createCourse(course) {
    delete course._id;
    return model.create(course);
    // const newCourse = { ...course, _id: Date.now().toString() };
    // model.find() = [...model.find(), newCourse];
    // return newCourse;
}
export function updateCourse(courseId, courseUpdates) {
    const { courses } = model;
    const course = courses.find((course) => course._id === courseId);
    Object.assign(course, courseUpdates);
    return course;
}


import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
    const enrollment = {
        _id: Date.now().toString(),
        user: userId,
        course: courseId
    };
    Database.enrollments.push(enrollment);
    return enrollment;
}

export function unenrollUserFromCourse(enrollmentId) {
    const { enrollments } = Database;
    const index = enrollments.findIndex(e => e._id === enrollmentId);
    if (index !== -1) {
        enrollments.splice(index, 1);
    }
}

export function findEnrollmentByCourseAndUser(userId, courseId) {
    const { enrollments } = Database;
    return enrollments.find(
        e => e.user === userId && e.course === courseId
    );
}

import Database from "../Database/index.js";
import model from "./model.js";
export async function findCoursesForUser(userId) {
    const enrollments = await model.find({ user: userId }).populate("course");
    return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
    const enrollments = await model.find({ course: courseId }).populate("user");
    return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
    return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
    return model.deleteOne({ user, course });
}

// export function enrollUserInCourse(userId, courseId) {
//     const enrollment = {
//         _id: Date.now().toString(),
//         user: userId,
//         course: courseId
//     };
//     Database.enrollments.push(enrollment);
//     return enrollment;
// }

// export function unenrollUserFromCourse(enrollmentId) {
//     const { enrollments } = Database;
//     const index = enrollments.findIndex(e => e._id === enrollmentId);
//     if (index !== -1) {
//         enrollments.splice(index, 1);
//     }
// }

// export function findEnrollmentByCourseAndUser(userId, courseId) {
//     const { enrollments } = Database;
//     return enrollments.find(
//         e => e.user === userId && e.course === courseId
//     );
// }

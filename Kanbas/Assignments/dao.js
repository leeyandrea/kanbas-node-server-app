import Database from "../Database/index.js";
import model from "./model.js";

export function createAssignment(assignment) {
    // const newAssignment = { ...assignment, _id: Date.now().toString() };
    // Database.assignments = [...Database.assignments, newAssignment];
    // return newAssignment;
    delete assignment._id;
    return model.create(assignment);
}

export function findAssignmentsForCourse(courseId) {
    // const { assignments } = Database;
    // return assignments.filter((assignment) => assignment.course === courseId);
    const assignments = model.find({ course: courseId });
    return assignments;
}

export function deleteAssignment(assignmentId) {
    // const { assignments } = Database;
    // Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
    return model.deleteOne({ _id: assignmentId });
}

export function updateAssignment(assignmentId, assignmentUpdates) {
    // const { assignments } = Database;
    // const assignment = assignments.find((a) => a._id === assignmentId);
    // Object.assign(assignment, assignmentUpdates);
    // return assignment;
    return model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
}
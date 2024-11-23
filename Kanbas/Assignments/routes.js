import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
    app.post("/api/courses/:courseId/assignments", (req, res) => {
        const { courseId } = req.params;
        const newAssignment = { ...req.body, course: courseId };
        const assignment = assignmentsDao.createAssignment(newAssignment);
        res.json(assignment);
    });

    app.get("/api/courses/:courseId/assignments", (req, res) => {
        const { courseId } = req.params;
        const assignments = assignmentsDao.findAssignmentsForCourse(courseId);
        res.json(assignments);
    });

    app.put("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const assignment = assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.json(assignment);
    });

    app.delete("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        assignmentsDao.deleteAssignment(assignmentId);
        res.sendStatus(204);
    });
}
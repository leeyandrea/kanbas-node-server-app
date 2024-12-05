import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
    // app.post("/api/courses/:courseId/assignments", async (req, res) => {
    //     const { courseId } = req.params;
    //     const newAssignment = { ...req.body, course: courseId };
    //     const assignment = await assignmentsDao.createAssignment(newAssignment);
    //     res.json(assignment);
    // });

    // app.get("/api/courses/:courseId/assignments", async (req, res) => {
    //     const { courseId } = req.params;
    //     const assignments = await assignmentsDao.findAssignmentsForCourse(courseId);
    //     res.json(assignments);
    // });

    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.sendStatus(204);
    });

    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        await assignmentsDao.deleteAssignment(assignmentId);
        res.sendStatus(204);
    });
}
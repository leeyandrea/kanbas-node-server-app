import express from 'express';
import * as enrollmentsDao from "./dao.js";

const router = express.Router();

export default function EnrollmentRoutes(app) {
    const router = express.Router();

    router.post('/enroll', (req, res) => {
        const { userId, courseId } = req.body;

        try {
            // Check if already enrolled
            const existingEnrollment = enrollmentsDao.findEnrollmentByCourseAndUser(userId, courseId);
            if (existingEnrollment) {
                return res.status(400).json({ message: 'Already enrolled' });
            }

            // Enroll user
            const enrollment = enrollmentsDao.enrollUserInCourse(userId, courseId);
            res.status(201).json(enrollment);
        } catch (error) {
            res.status(500).json({ message: 'Enrollment failed', error: error.message });
        }
    });

    router.delete('/unenroll/:enrollmentId', (req, res) => {
        const { enrollmentId } = req.params;

        try {
            enrollmentsDao.unenrollUserFromCourse(enrollmentId);
            res.status(200).json({ message: 'Unenrolled successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Unenrollment failed', error: error.message });
        }
    });

    app.use('/api/enrollments', router);
}
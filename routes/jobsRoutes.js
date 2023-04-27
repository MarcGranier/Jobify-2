import express from 'express'
const router = express.Router()

import {
	getAllJobs,
	createJob,
	updateJob,
	deleteJob,
	showStats
} from '../controllers/jobsController.js'

router.route('/').post(createJob).get(getAllJobs)
// place before :id
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router


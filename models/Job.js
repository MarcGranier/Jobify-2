import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
	{
		company: {
			type: String,
			required: [true, 'Please provide company'],
			maxlength: 20,
		},
		position: {
			type: String,
			required: [true, 'Please provide position'],
			maxlength: 100,
		},
		status: {
			type: String,
			enum: ['interview', 'declined', 'pending'],
			default: 'pending',
		},
		jobType: {
			type: String,
			enum: ['full-time', 'part-time', 'remote', 'internship'],
			default: 'full-time',
		},
		jobLocation: {
			type: String,
			default: 'my city',
			required: true,
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: [true, 'Please provide user'],
		},
	},
	{ timestamps: true }
)

export default mongoose.model('Job', JobSchema)

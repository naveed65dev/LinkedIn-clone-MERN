import Experience from '../models/experienceModel.js';

export const create = async (req, res) => {
    try {
        const user = req.user;
        const { companyName, position, startDate, endDate, description } = req.body;

        if (!companyName || !position) {
            return res.status(400).json({ err: "Invalid request body" });
        }

        const experienceObj = {
            companyName, position, startDate, endDate, description
        };

        // Create the experience
        const experience = await Experience.create(experienceObj);
        if (!user) {
            return res.status(401).json({ err: "User not authenticated" });
        }

        // Update the user with the new experience
        user.experiences.push(experience._id);
        await user.save();

        // Respond with the updated user or experience data
        return res.status(200).json({ user, experience });
    } catch (error) {
        // Log detailed error information
        console.error("Error creating experience:", error);

        // Handle different error scenarios
        if (error.name === 'ValidationError') {
            return res.status(400).json({ err: "Validation error", details: error.errors });
        } else {
            return res.status(500).json({ err: "Internal server error" });
        }
    }
};

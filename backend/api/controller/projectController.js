import Project from '../models/projectModel.js';

export const create = async (req, res) => {
    try {
        const user = req.user;
        const { name, description, links } = req.body;

        if (!name) {
            return res.status(400).json({ err: "Invalid data" });
        }

        const projectOjt = { name, description, links };

        // Create the project
        const project = await Project.create(projectOjt);
        if (!user) {
            return res.status(401).json({ err: "User not authenticated" });
        }

        // Update the user with the new project
        user.projects.push(project._id);
        await user.save();

        // Respond with the updated user or created project data
        return res.status(200).json({ user, project });
    } catch (error) {
        // Handle any unexpected errors
        console.error("Error creating project:", error);
        return res.status(500).json({ err: "Internal server error" });
    }
};

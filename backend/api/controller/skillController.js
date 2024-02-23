import SkillName from '../models/skillsModel.js';

export const createSkill = async (req, res) => {
    const user = req.user;
    const skillName = req.body;

    if (!skillName) {
        return res.status(402).json({ err: "Invalid data" });
    }

    const skillOjt = skillName;
    const createdSkill = await SkillName.create(skillOjt);
    user.skills.push(createdSkill._id);
    await user.save();
    return res.status(200).json(createdSkill);
};

const { getAllDataDB, getSkillByIdDB, createNewSkillDB, updateSkillDB } = require("../repository/skills.repository");

const getAllData = async () => {
  const data = await getAllDataDB();
  return data;
};
const getSkillById = async (id) => {
  const data = await getSkillByIdDB(id);
  return data;
};
const createNewSkill = async (label, category, priority) => {
  const data = await createNewSkillDB(label, category, priority);
  return data;

};
const updateSkill = async (id, label, category, priority) => {
  const data = await updateSkillDB(id, label, category, priority);
  return data;
};
module.exports = { getAllData, getSkillById, createNewSkill,updateSkill };
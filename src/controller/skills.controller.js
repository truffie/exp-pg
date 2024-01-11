const express = require('express');
const { getAllData, getSkillById, createNewSkill, updateSkill } = require('../service/skills.service');
const { buildResponse } = require('../helper/buildResponse');
const route = express.Router();

route.get('/', async (_req, res) => {
  try {
    const data = await getAllData();
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});
route.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getSkillById(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});
route.post('/', async (req, res) => {
  try {
    const { label, category, priority } = req.body;
    const data = await createNewSkill(label, category, priority);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }

});
route.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { label, category, priority } = req.body;
    const data = await updateSkill(id, label, category, priority);
    buildResponse(res, 200, data);
  } catch (er) {
    buildResponse(res, 404, er.message);
  }
});
module.exports = route;

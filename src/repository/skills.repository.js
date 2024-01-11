const { pool } = require('../db');

const getAllDataDB = async () => {
  const client = await pool.connect();
  const queryText = 'SELECT * FROM environment';
  const { rows } = await client.query(queryText);
  return rows;
};
const getSkillByIdDB = async (id) => {
  const client = await pool.connect();

  const queryText = 'SELECT * FROM environment where id = $1';
  const { rows } = await client.query(queryText, [id]);
  return rows;
};
const createNewSkillDB = async (label, category, priority) => {
  const client = await pool.connect();
  const data = await getSkillByIdDB(label.toLowerCase());
  if (data.length) throw new Error('already exists');
  const queryText = 'INSERT INTO environment(id,label,category,priority) values ($1,$2,$3,$4) returning *';
  const { rows } = await client.query(queryText, [label.toLowerCase(), label, category, priority]);
  return rows;


};
const updateSkillDB = async (id, label, category, priority) => {
  const client = await pool.connect();
  const selector = 'SELECT * FROM environment where id = $1';
  const { rows: select } = await client.query(selector, [id]);
  select[0] = { ...select[0], label, category, priority };
  const queryText = 'update environment set id = $1, label = $2, category = $3, priority = $4 where id = $5 returning *';
  const { rows } = await client.query(queryText, [label.toLowerCase(), label, category, priority, id]);
  return rows;

};
module.exports =
  { getAllDataDB, getSkillByIdDB, createNewSkillDB, updateSkillDB };
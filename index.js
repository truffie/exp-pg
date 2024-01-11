require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(` ________________________________`);
  console.log(`|                                |`);
  console.log(`|                                |`);
  console.log(`|  SERVER RUNNING ON PORT: ${PORT}  |`);
  console.log(`|                                |`);
  console.log(`|________________________________|`);
});

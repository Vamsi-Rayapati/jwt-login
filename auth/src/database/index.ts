import { Sequelize } from "sequelize";
import { initModels } from "./models/init-models";

const sequelize = new Sequelize(process.env.DB_NAME ?? '', process.env.DB_USER ?? '', process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});
initModels(sequelize);
export default sequelize;
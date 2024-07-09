import { Pool } from 'pg';
require('dotenv').config(); // Asegúrate de llamar a dotenv.config() al inicio

interface DbConfig {
  user: string;
  host: string;
  database: string;
  password: string;
  port: number;
}

const dbConfig: DbConfig = {
  user: process.env.POSTGRES_USER || 'usuario_por_defecto',
  host: 'localhost', // Asumiendo que el host es localhost, ajusta según sea necesario
  database: process.env.POSTGRES_DB || 'base_de_datos_por_defecto',
  password: process.env.POSTGRES_PASSWORD || 'contraseña_por_defecto',
  port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
};

console.log(`Conectando a la DB con la configuración: ${JSON.stringify({...dbConfig})}`);

const pool = new Pool(dbConfig);

export default pool;
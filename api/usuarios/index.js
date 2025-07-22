import db from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const [rows] = await db.query('SELECT * FROM usuarios');
      return res.status(200).json(rows);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al consultar usuarios' });
    }
  }

  return res.status(405).json({ message: 'Método no permitido' });
}

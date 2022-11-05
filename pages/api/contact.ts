import { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase, insertDocument } from "../../helpers/db-utils";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid Input' });
      return;
    }

    const newMessage = {
      email,
      name,
      message
    };

    let mongoClient;
    try {
      mongoClient = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    try {
      await insertDocument(mongoClient, 'contact', newMessage);
    } catch (error) {
      res.status(500).json({ message: 'Could add message' });
      return;
    }

    res.status(201).json({ message: 'Successfully stored message!', contactMessage: newMessage });
  }
};

export default handler;

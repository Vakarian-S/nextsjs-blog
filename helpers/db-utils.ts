import { MongoClient, SortDirection } from "mongodb";

export const getAllDocuments = async (client: MongoClient, collection: string, sort: SortDirection, filter: any = {}) => {
  const db = client.db();
  return await db.collection(collection).find(filter).sort({ _id: sort }).toArray();
};

export const insertDocument = async (client: MongoClient, collection: string, data: any) => {
  const db = client.db();
  return await db.collection(collection).insertOne(data);
};

export const connectDatabase = async () => {
  return await MongoClient.connect('mongodb+srv://user:ebXxeffuTrHoqZ4e@cluster0.rujypjj.mongodb.net/my-site?retryWrites=true&w=majority');
};

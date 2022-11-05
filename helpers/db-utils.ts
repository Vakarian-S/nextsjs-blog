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
  const connectionString =
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_NAME}.rujypjj.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
  return await MongoClient.connect(connectionString);
};

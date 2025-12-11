import { ObjectId } from 'mongodb';
import { connectToDatabase } from './mongodb';

export interface ContactSubmission {
  _id?: ObjectId;
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  submittedAt: string;
  read: boolean;
}

const COLLECTION_NAME = 'contact_submissions';

export async function addSubmission(
  data: Omit<ContactSubmission, 'id' | 'submittedAt' | 'read' | '_id'>
): Promise<ContactSubmission> {
  const { db } = await connectToDatabase();
  const collection = db.collection<ContactSubmission>(COLLECTION_NAME);

  const submission: Omit<ContactSubmission, '_id'> = {
    ...data,
    id: new ObjectId().toString(),
    submittedAt: new Date().toISOString(),
    read: false,
  };

  await collection.insertOne(submission as ContactSubmission);
  return submission as ContactSubmission;
}

export async function getSubmissions(): Promise<ContactSubmission[]> {
  const { db } = await connectToDatabase();
  const collection = db.collection<ContactSubmission>(COLLECTION_NAME);

  const submissions = await collection
    .find({})
    .sort({ submittedAt: -1 })
    .toArray();

  return submissions;
}

export async function getSubmissionById(id: string): Promise<ContactSubmission | null> {
  const { db } = await connectToDatabase();
  const collection = db.collection<ContactSubmission>(COLLECTION_NAME);

  return collection.findOne({ id });
}

export async function markAsRead(id: string): Promise<boolean> {
  const { db } = await connectToDatabase();
  const collection = db.collection<ContactSubmission>(COLLECTION_NAME);

  const result = await collection.updateOne({ id }, { $set: { read: true } });
  return result.modifiedCount > 0;
}

export async function deleteSubmission(id: string): Promise<boolean> {
  const { db } = await connectToDatabase();
  const collection = db.collection<ContactSubmission>(COLLECTION_NAME);

  const result = await collection.deleteOne({ id });
  return result.deletedCount > 0;
}

export async function getUnreadCount(): Promise<number> {
  const { db } = await connectToDatabase();
  const collection = db.collection<ContactSubmission>(COLLECTION_NAME);

  return collection.countDocuments({ read: false });
}

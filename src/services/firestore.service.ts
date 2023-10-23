import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';
import { app } from './firebase.service';

export const Firestore = getFirestore(app);

class FirestoreService {
  firestore = Firestore;

  latestReadDocsReferences = [];

  fetchDocs = async (collectionName: string) => {
    try {
      const querySnapshot = await getDocs(
        collection(Firestore, collectionName)
      );

      const docs = [];

      querySnapshot.forEach((doc) => {
        this.latestReadDocsReferences.push(doc.ref);
        docs.push(doc.data());
      });

      return docs;
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  clearLatestReadDocs = async () => {
    for (let index = 0; index < this.latestReadDocsReferences.length; index++) {
      const reference = this.latestReadDocsReferences[index];

      await deleteDoc(reference);
    }

    console.log(
      `[FIRESTORE] - Cleared ${this.latestReadDocsReferences.length} docs`
    );

    this.latestReadDocsReferences = [];
  };
}

export default FirestoreService;

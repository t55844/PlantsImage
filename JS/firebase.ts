import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebaseConfig'

export async function saveFavorite(data) {

    try {
        const docRef = await addDoc(collection(db, "favorites"), data);
        console.log("Document written with ID: ", docRef);
        return { error: false, return: docRef }
    } catch (e) {
        console.error("Error adding document: ", e);
        return { error: true }

    }
}
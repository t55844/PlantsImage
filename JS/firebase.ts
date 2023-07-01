import { collection, addDoc, query, where } from "firebase/firestore";
import { db } from '../firebaseConfig'


export function queryFavorite(data: { id: number, email: string }) {
    const favoriteRef = collection(db, "favorites");

    // Create a query against the collection.
    const result = query(favoriteRef, where("id", "==", data.id));
    console.log('queryFavorite ' + Object.keys(result));
}

export async function saveFavorite(data: { id: number, email: string }) {
    queryFavorite(data)

    /*try {
        const docRef = await addDoc(collection(db, "favorites"), data);
        console.log(data)
        console.log("Document written with ID: ", docRef);
        return { error: false, return: docRef }
    } catch (e) {
        console.error("Error adding document: ", e);
        return { error: true }

    }*/
}
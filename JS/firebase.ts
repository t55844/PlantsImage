import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { dbFirebase as db } from '../firebaseConfig'


export async function confirmFavorite(data: { id: number, email: string }) {
    const favoriteRef = collection(db, "favorites");

    // Create a query against the collection.
    const queryResult = query(favoriteRef, where("id", "==", data.id), where("email", "==", data.email));

    // Retrieve the documents that match the query
    const querySnapshot = await getDocs(queryResult);

    // Extract the data from the query snapshot
    const favorites = querySnapshot.docs.map((doc) => doc.data());

    if (favorites.length == 0) {
        return { error: false, msg: "No favorites" }
    } else {
        return { error: true, msg: "has alred favorite" }

    }


}

export async function saveFavorite(data: { id: number, email: string }) {
    const isFavorite = await confirmFavorite(data)

    if (isFavorite.error) {
        return isFavorite
    } else {
        try {
            const docRef = await addDoc(collection(db, "favorites"), data);
            console.log(data)
            console.log("Document written with ID: ", docRef);
            return { error: false, return: docRef }
        } catch (e) {
            console.error("Error adding document: ", e);
            return { error: true }

        }
    }
}
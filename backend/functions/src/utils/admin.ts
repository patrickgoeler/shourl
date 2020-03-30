import * as admin from "firebase-admin"
import { adminConfig } from "./secret"

admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
    databaseURL: "https://shourl-62076.firebaseio.com",
})

const db = admin.firestore()

export { admin, db }
import * as admin from 'firebase-admin'

const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } =
  process.env

const config = {
  credential: admin.credential.cert({
    projectId: FIREBASE_PROJECT_ID,
    clientEmail: FIREBASE_CLIENT_EMAIL,
    privateKey: FIREBASE_PRIVATE_KEY?.replace(/\\n/gm, '\n'),
  }),
}

const app = admin.apps.length > 0 ? admin.app() : admin.initializeApp(config)
export { app }

import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { FirestoreAdapter } from '@next-auth/firebase-adapter'
import { firestore } from '@/lib/firebase'
// import * as firestoreFunctions from 'firebase/firestore'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

const web_client_id = process.env.WEB_CLIENT_ID || ''
const web_client_secret = process.env.WEB_CLIENT_SECRET || ''

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: web_client_id,
      clientSecret: web_client_secret,
    }),
  ],
  adapter: FirestoreAdapter(firestore.app),
})

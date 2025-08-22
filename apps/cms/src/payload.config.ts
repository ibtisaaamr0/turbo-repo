import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Main } from './collections/Main'
import { ContactForm } from './collections/ContactForm'
import { ContactInfo } from './collections/ContactInfo'
import { Projects } from './collections/Projects'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:5000',

  cors: ['http://localhost:3000'], 

  collections: [Users, Media, Main, ContactForm, ContactInfo, Projects],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || '',
    },
  }),
  plugins: [
    payloadCloudPlugin(),
  ],
})


import sanityClient from '@sanity/client'
import imgeUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-07-11',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
})

const builder = imgeUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
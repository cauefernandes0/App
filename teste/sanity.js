import {createClient} from '@sanity/client'
import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = createClient({
    projectId: '',
    datased: 'production',
    useCdn: true,
    apiVersion: '2024-10-19'
})

const builder = imageBuilder(client);

export const urlFor = source=> builder.image(source);

export default client;

// sanity cors add http://localhost:3000
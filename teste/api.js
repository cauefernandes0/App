import  sanityClient from "./sanity";
let sanityQuery = (query,params) => sanityClient.fetch(query,params)

export const getFeaturedOptions = ()=>{
    return sanityQuery(`
        *[_type=='featured']{
            ...,
            prestadores[]->{
                    ...,
                work[]->{
                    ...,
                },
                type->{
                    name
                }
            }
        }
        `)
}

export const getCategories = ()=>{
    return sanityQuery(`*[_type == 'category']
        `);
}

export const getFeaturedOptionById = id=>{
    return sanityQuery(`
         *[_type=='featured' && _id == $id]{
            ...,
            prestadores[]->{
                ...,
                work[]->,
                type->{
                    name
                }
            }
        }[0]
        `, {id})
}
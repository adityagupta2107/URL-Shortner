import urlSchema from '../models/shorturl.modelsschema.js'

export const saveShortURL = async (shortUrl,longUrl,userId)=>{
    const newUrl = new urlSchema({
        full_url:longUrl,
        short_url:shortUrl
    })
    if(userId){
        newUrl.user_id =userId
    }
    await newUrl.save()
};

export const getShortUrl = async (shortUrl) => {
   return await urlSchema.findOneAndUpdate({short_url:shortUrl} , {$inc:{clicks:1}} , {new:true})
}; 
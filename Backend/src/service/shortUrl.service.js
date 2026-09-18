import {genearateNanoID} from '../utils/healpher.js'

import {saveShortURL} from '../dao/short_url.js'
export const createShortURLServiceWithoutUser = (url)=>{
     const shortUrl = genearateNanoID(7)
      saveShortURL(shortUrl,url)
   return shortUrl;
}
export const createShortURLServiceWithUser = (url,userId)=>{
     const shortUrl = genearateNanoID(7)
      saveShortURL(shortUrl,url,userId)
   return shortUrl;
}
import { getShortUrl } from '../dao/short_url.js';
import { createShortURLServiceWithoutUser, createShortURLServiceWithUser } from '../service/shortUrl.service.js'


export const createShortUrl=async (req,res)=>{    
    const {url} = req.body
    const userId = req.user?.id;
    const shortUrl = await userId
        ? createShortURLServiceWithUser(url, userId)
        : createShortURLServiceWithoutUser(url);
        // console.log(shortUrl);
        
    res.send(process.env.APP_URL + shortUrl);
}

export const redirectFromShortUrl = async (req,res)=>{
    const {id} = req.params;
    const url = await getShortUrl(id)
    if(url){
        res.redirect(url.full_url)
    }else{
        res.status(404).send("Not Found")
    }
}


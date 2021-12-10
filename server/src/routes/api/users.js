import { Router } from "express";
import fetch from "isomorphic-fetch";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


//Fonction pour récuperer USER
async function fetchUser(url){
    const response = await fetch(url)
    return await response.json()
}

const api = Router();

/*const cors = require("cors");

api.use(
  cors({
    origin: "*",
  })
)*/

api.get("/:username", async (request, response) => {
    const { username } = request.params;
    const user_bd = await prisma.user.findUnique({
      where: {
          login: username.toLowerCase()
      }
  });
    console.log(" user_bd : " + user_bd)

    const url = `https://api.github.com/users/${username}`

    if (user_bd == null) {
        const user_api_github = await fetchUser(url)
        console.log(user_api_github)
        if (user_api_github.message){
          response.json({message:user_api_github.message})
        }
      
        await prisma.user.create({
            data: {
              id : user_api_github.id,
              login: user_api_github.login.toLowerCase(),
              node_id : user_api_github.node_id,
              avatar_url : user_api_github.avatar_url,
              gravatar_id : user_api_github.gravatar_id,
              url : user_api_github.url,
              html_url : user_api_github.html_url,
              followers_url : user_api_github.followers_url,
              following_url : user_api_github.following_url,
              gists_url : user_api_github.gists_url,
              starred_url : user_api_github.starred_url,
              subscriptions_url : user_api_github.starred_url,
              organizations_url : user_api_github.organizations_url,
              repos_url : user_api_github.repos_url,
              events_url : user_api_github.events_url,
              received_events_url : user_api_github.received_events_url,
              type : user_api_github.type,
              site_admin : user_api_github.site_admin,
              name : user_api_github.name,
              company : user_api_github.company,
              blog : user_api_github.blog,
              location : user_api_github.location,
              email : user_api_github.email,
              hireable : user_api_github.hireable,
              bio : user_api_github.bio,
              twitter_username : user_api_github.twitter_username,
              public_repos : user_api_github.public_repos,
              public_gists : user_api_github.public_gists,
              followers : user_api_github.followers,
              following : user_api_github.following,
              created_at : user_api_github.created_at,
              updated_at : user_api_github.updated_at
            }
          })

        const user_from_bd = await prisma.user.findUnique({
            where: {
                login: user_api_github.login.toLowerCase()
            }
        });

        response.json({user_from_bd})
        
    }
    else{
      response.json({user_bd})
    }

    //console.log(user)
    

    
});
export default api;

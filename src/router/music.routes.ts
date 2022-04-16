import { Router } from "express";
import { nanoid } from "nanoid";
import Music from "../model/music.model";
import musicStorage from "../storage/music.storage";
import music from "../storage/music.storage";


const router = Router()

router.post ('/',(req,res)=>{
  let music:Music = {
    id: nanoid(),
    name: req.body.name,
    auther: req.body.auther,
    gennr: req.body.ganer,
    durection: req.body.durection,
    pic: req.body.pic,
  }
  
  musicStorage.addMusic.
  
  
})
















export default router
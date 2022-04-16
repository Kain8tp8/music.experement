import Music from "../model/music.model";

let musicl: Music[] = []

function addMusic(music: Music) {
  musicl.push(music)
}

function allMusics() {
  return musicl
}

function remove(mid: string) {
  let i = musicl.findIndex(music => music.id === mid)
  musicl.slice(i, 1)
}

function findMusic(ganer: string) {
  let mps = musicl.filter(music => music.gennr===ganer)
  return mps
}

function update(id: string, newMusic:Music) {
  let i = musicl.findIndex(music =>music.id === id)
  newMusic.id =id
  musicl[i] = newMusic
}

export default {
  addMusic,
  allMusics,
  findMusic,
  remove,
  update
}


































//  let mps: Music[] = []

//  for (const music of musicl) {
//    if (music.gennr == ganer)
//      mps.push(music)
//  }

// return mps
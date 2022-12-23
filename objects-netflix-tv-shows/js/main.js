//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class NetflixTVShows{
  constructor(title, genre, numOfEp, rating){
    this.title = title
    this.genre = genre
    this.numOfEpisodes = numOfEp
    this.trashOrNah = rating
  }
  addToList(){
    alert('Added to list')
  }
  thumbsDown(){
    console.log('I do not like this show')
  }
  recommend(){
    console.log(`I recommend shows with ${this.director}, I think that they do a great job`)
  }
  play(){
    alert('Show starting')
  }
  stop(){
    alert('Show is stopping')
  }
}

let areYouAfraidOfTheDark = new NetflixTVShows('Are You Afraid of the Dark', 'horror', 94,4.5)

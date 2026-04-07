// Define the Movie class
class Movie {
  // title, cast, description, rating
  #title;
  #cast;
  #description;
  #rating;
  constructor(title, cast, description, rating) {
    this.#title = title;
    this.#cast = cast;
    this.#description = description;
    this.#rating = rating;
  }
  // Method to update the rating of the movie
  updateRating(newRating) {this.#rating=newRating}
  // Method to display the movie's information
  displayInfo() {
    let titleHTML = "<p>Title: " + this.#title + "</p>";
    let castHTML = "<p>Cast: " + this.#cast + "</p>";
    let descriptionHTML = "<p>Decription: " + this.#description + "</p>"
    let ratingHTML = "<p>Rating: " + this.#rating + "</p>"
    document.getElementById("movie-info").innerHTML += titleHTML + castHTML + descriptionHTML + ratingHTML;
  }
}

// Test your implementation
let movie1 = new Movie("The Hunger Games", ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth", "Woody Harrelson", "Elizabeth Banks", "Lenny Kravitz", "Stanley Tucci", "Donald Sutherland"], "The Capitol of Panem maintains its hold on its 12 districts by forcing them each to select a boy and a girl, called Tributes, to compete in a nationally televised event called the Hunger Games. Katniss Everdeen has to survive after she volunteers for her sister.", 7.2)
// Display the initial information of the movie
movie1.displayInfo();
// Update the rating of the movie
movie1.updateRating(5.5);
// Display the updated information of the movie
movie1.displayInfo();
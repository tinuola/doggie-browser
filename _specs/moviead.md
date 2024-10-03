# Theater and Showtime Ad Unit

One of GumGum's core businesses is high-impact interactive web advertising. One of our products is called an 'in-screen' ad unit. 

We'd like you to create an animated in-screen ad unit for an upcoming movie - you can pick whatever movie you'd like. You 'll need to scrape assets for it from web. 

Besides the specs listed below, this unit also needs to include some dynamic content. Specifically, if a user enters their zip code into an input, it should pull theater and showtime information for the movie into the ad unit itself. Clicking on a purchase button should drive traffic to the page where tickets can be purchased for that specific theater and showtime.

### In-Screen Ad Unit Specs
- HTML5 / CSS / Javascript
- No Flash (yuck!)
- 100px tall maximum
- Responsive - should look great at any browser width
- Retina assets 
- Animated
- Contains a logo, graphics, and a "call to action" button ie: "Buy Now"
- Fixed to the bottom of the browser viewport
- [Example](https://gallery.gumgum.com/in-screen/pbs-victoria/tablet)

### Things to consider:
 - How do you display / browse mulitple showtimes for the movie?
 - How does a user select a specific showtime to purchase tickets for from within the ad unit?
 - What happens if there are multiple theaters in a given zip code?
 - What happens if there are no theaters in a given zip code?
 - How do you use design and animation to encourage the user to interact with the ad?

You can use Fandango's API for location and showtimes. (You'll need to register an account, documentation [here](https://developer.fandango.com/docs/Home/))

We generally use [Tumult Hype](https://tumult.com/hype/download/) for creating HTML animations. They offer a free trial if you'd like to try it out, or you can build the unit by hand if you prefer.
# HOMEWORK: PokéApp

![catch](./frameworks.jpg)

Over the weekend, you will be building a Pokémon app in **React** using this super neat, super free [PokeApi](https://pokeapi.co/)!

## Here's your mockup:

![poke](./pokemock.png)

## Here's your mission:

Build an app that renders the names of the first 151 Pokémon in the Pokéapi database on page load. (Maybe this is `https://pokeapi.co/api/v2/pokemon?limit=151`... or something.... 🤔) 

There's documentation pages on [the Pokemon list endpoint](https://pokeapi.co/docsv2/#resource-lists) and [the single Pokemon endpoint](https://pokeapi.co/docsv2/#pokemon) on the PokeAPI website. Keep in mind that the Pokemon's name can be used to build URLs instead of the ID - e.g. https://pokeapi.co/api/v2/pokemon/bulbasaur/ is the endpoint for information about Bulbasaur.

When the user clicks a name, the app should render information about that Pokémon, including the name and weight.

## Deliverables

1. Using all of your knowledge about wireframing and project planning, complete the following steps before jumping into a line of code:
  - Wireframe the mock up above, <a href="https://facebook.github.io/react/docs/thinking-in-react.html">React Docs style.</a>
  - No, really. [This is required reading.](https://facebook.github.io/react/docs/thinking-in-react.html)
  - Write user stories to match with the functionality. Put these in the `userstories.md` file in this repo.
  - Break down the user stories into steps to code.

2. Tackle app above with React. Make sure to write clean code, with **frequent git commits** (we should be able to view the story of building your app based on your commits).

3. Style that puppy and make it look goooooood. ([Need some inspiration?](http://designer-trails-71446.bitballoon.com/))

4. Submit hw via a pull request!

5. Deploy your amazing PokéApp!!
    - Run `npm build`
    - A new folder, `/build`, will appear
    - Take everything in the build folder and stick it up on BitBalloon!
    - Include your BitBalloon link on your pull request!

## BONUS

- Autocomplete: Add an input above the list of Pokemon which, as the user types, filters the list of Pokemon that are displayed to the user.
- Debounce the autocomplete method, so the list isn't refreshing with each character the user types.

## SUPER BONUS

- Infinite Scroll is the practice of loading more content when you get to the bottom of a page. Implement infinite scroll in your Pokemon List component. When the scroll depth of the user gets close to the bottom, make a new HTTP request for the next page of API results. When the user gets to the bottom of that, make another request. 

### React Tips

When loading initial data via an API call, place the API call in the component's `componentDidMount` method:

```javascript
class ExampleComponent extends Component {
  // probably state up here
  componentDidMount() {
    // api call here
  }

  render() {
    return (
      // a bunch of jsx...
    )
  }
```

### Bonus

Feeling like a rockstar? Add the Pokémon's abilities to the rendered profile (see mockup above).

### Note!

The PokéApi is rate limited:

> There is a daily rate limit of 300 requests per resource per IP address. So a single IP address can call the bulbasaur resource 300 times a day. Not 300 requests across the entire dataset! This is to stop our database from falling over under heavy load.

The limit is pretty high -- you shouldn't run out -- but if you do, either go to a nearby coffeeshop or use a [VPN](https://en.wikipedia.org/wiki/Virtual_private_network). ([TunnelBear](https://www.tunnelbear.com/) is a good one, and free for the first 600MB or so.)


## 🚀 Completion looks like:

- You have a PokéApp in this directory
- Your PokéApp has been styled and looks _killer_
- Your `userstories.md` has user stories in it
- Your PokéApp is deployed!

## 🚀 Your homework submission should include:

- A pull request created on _this repo_.
- Your BitBalloon link
- Completion, comfort, wins, losses, questions... you know the drill.

## This homework is due 🚨 11PM ON SUNDAY NIGHT 🚨

![whichone](./which.jpg)


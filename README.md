# Some Reusable Widgets

This is an app to demo reusable components in React

You can view it live [here](https://widgets-lemon.vercel.app)

## Requirements

All of these widgets make use of Semantic UI. If you'd like to use any of these widgets, you'll need to make sure you include the Semantic UI CSS file (available at cdnjs)

## Widgets

### Accordion

The Accordion component takes an "options" object as a prop, which contains an array of elements which has both 'title' and 'content' properties

The 'title' is the text visible when the accordion is closed, the 'content' is what you see when it is expanded

### Search

The Search by itself takes no props, but can easily be configured to take a default search term. The Search component debounces the input to reduce the amount of requests.

When the debounced time passes, it sends a request to wikipedia and displays the top 10 results, formatted.

This component makes use of "dangerouslySetInnerHTML" which is not recommended usually, but wikipedia returns html tags in their response, rather than plain text.

We make use of this and apply some style to make the search term bold in the results

### Dropdown

This dropdown uses an event listener attached to the body to determine when to close. In the context of the deployed app, it's used to set the color of a span, using 'useRef'

### Translate

This uses the previously mentioned Dropdown component and the Google Translate API. If you're using this in your own application, you will need to generate your own API key.

The translate API detects the source language, so most of the time, it should be able to pick it up without specifying.

However, if there is any doubt or ambiguity, it's very easy to implement - simply add a second dropdown - one for source language, and one for destination language

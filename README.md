# Wozaa Social Media App

Wozaa is a colloquial term that loosely translates to "What's up". This embosies the spirit of this social media app that was built in partial fulfillment of Elewa Tech's take home coding mini-project. The app uses data from (https://jsonplaceholder.typicode.com/) API. To that end, anonymous users can view up to 20 posts per day for free. Users can also log in using their username or email and zipcode as password. An authenticated user can view their profile, their posts, follow other users, see posts from users they follow, and logout. Further, an authenticated user can pay for premium membership (a mock payment for now) to be able to view all posts. 

## Notable features
The app does not have a server side implementation, which proved a challenge in persisting most features. However, I saved most features to local storage, allowing them to persist even after reloading the app. Further, I included a view count feature, allowing a user to determine how many posts they have left for the day. 

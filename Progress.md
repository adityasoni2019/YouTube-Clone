## This is where I'm going to store description of every commit. 

##### In this commit
1. Deleting the default page. 
2. Setting up Tailwind
    - Installing Tailwind using the `npm i -D tailwindcss` (cause, we just want this in dev dependency)
    - And, then, we'll get the tailwind.config.js using the `npx tailwindcss init`
    - Mentioning the type of files, that tailwind has to sort of track.

##### In this commit

###### Setting up Redux
We needed it, cause we wanted to make the slide functionality of the slide bar, and for that we wanted a global variable.

1. Commands
    - `npm i @reduxjs/toolkit`
    - `npm i react-redux`
2. Creating a Store
3. Creating a Slice.
4. Creating the show and hide functionality in sidebar.


##### In this commit

###### Setting up Routing

1. Installing the React Router DOM using the `npm i react-router-dom` command.
2. Creating browser router.

##### In this commit

###### Caching the search resutls

1. In this commit, we cache all the results that we search, so that when we search those things again, it doesn't call the API again. 
2. This is also useful when we basically hit backspace, cause, when when we do that, it'll call the API again for a thing that we've alreay called an API for. 
3. A very nice optimizatio move. 
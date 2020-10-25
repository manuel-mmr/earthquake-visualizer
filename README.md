# Eearthquakes Visualizer

## Getting started

Before we get started, you have to make sure you have installed [yarn](https://yarnpkg.com/). After that you need to run
the following command:

```
yarn &&yarn serve
```

## Architecture

| Folder | What |
|--------------|------|
| `components` | General components used by the application
| `gateways` | Place where API to get data is defined |
| `plugins` | constains the plugins used by the application |
| `router` | defines the routes used by the application |
| `store` | defines the store used by the application |
| `views` | contains the views |


## Consinderation
- It was decided to use Vuex because it keeps all the state of the application in a central place making the application more organised.
- The creation of 'earthquakeApi.js' is based on the desire of having the API calls separate from the logic in the components so it could be easily replaced if needed.
- Bootstrap was added to simplify the creation of the view by using some components (e.g: datepicker) that would take too much time to implement. Although, I tried to use bootstrap as less as possible.
- I have used `VueMapbox` because I saw that it simplifies the use of mapbox and it makes the setup and styling of the popup easier. I have also noticed that the performance is better but it could be my perception.


## TODO/Improvements
- Add unit tests
- Improve error handleling
- Improve map performance (e.g: limiting number of markers, limiting zoom and show markers only inside of that zoom)
- Use typescript to handle types
import { ping } from './services'
import { show } from './views/message'

const supportedAPI = ['init', 'message']; // enlist all methods supported by API (e.g. `mw('event', 'user-login');`)

/**
    The main entry of the application
    */
function app(window) {
    console.log('JS-Widget starting');

    // set default configurations
    let configurations = {
        someDefaultConfiguration: false
    };

    // all methods that were called till now and stored in queue
    // needs to be called now 
    let globalObject = window[window['JS-Widget']];
    let queue = globalObject.q;
    if (queue) {
        for (var i = 0; i < queue.length; i++) {
            if (queue[i][0].toLowerCase() == 'init') {
                configurations = extendObject(configurations, queue[i][1]);
                fetchConfig(configurations.configSourceUrl, function(fetchedConfig){
                configurations = Object.assign(configurations, fetchedConfig);
                globalObject.configurations = configurations;
                show();
              });
                console.log('JS-Widget started', configurations);
                configurations.networkHandleId
            }
            else
                apiHandler(queue[i][0], queue[i][1]);
        }
    }

    // override temporary (until the app loaded) handler
    // for widget's API calls
    globalObject = apiHandler;
    globalObject.configurations = configurations;
}


function fetchConfig(url, callback) {
  // Set up our HTTP request
  var xhr = new XMLHttpRequest();

  // Setup our listener to process compeleted requests
  xhr.onreadystatechange = function () {

    // Only run if the request is complete
    if (xhr.readyState !== 4) return;

    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
      // What do when the request is successful
      try {
        var networkHandle = JSON.parse(xhr.responseText);
        show(networkHandle); 
      } catch (err) {
				console.log(err);
        console.error('Error: failed to parse config object');
      }
    }

  };

  // Create and send a GET request
  // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
  // The second argument is the endpoint URL
  xhr.open('GET', url);
  xhr.send(); 
}

/**
    Method that handles all API calls
    */
function apiHandler(api, params) {
    if (!api) throw Error('API method required');
    api = api.toLowerCase();

    if (supportedAPI.indexOf(api) === -1) throw Error(`Method ${api} is not supported`);

    console.log(`Handling API call ${api}`, params);

    switch (api) {
        // TODO: add API implementation
        case 'message':
            break;
        default:
            console.warn(`No handler defined for ${api}`);
    }
}

function extendObject(a, b) {
    for (var key in b)
        if (b.hasOwnProperty(key))
            a[key] = b[key];
    return a;
}

app(window);

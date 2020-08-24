var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  'http://localhost:3000/home',
  'http://localhost:3000/event',
  './manifets.webmanifest',
  'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/home_screen/electrician.jpg',
  'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/home_screen/plumber.jpg',
  'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/home_screen/carpenter.jpg',
  'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_905d3300.jpeg'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });

  self.addEventListener('activate',function(event){
    self.clients.claim()
  })
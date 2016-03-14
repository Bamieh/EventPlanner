/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  
  app.properties.userDataReady = {
    type: Boolean,
    observer: '_onUserDataReadyChanged'
  }
  app._onUserDataReadyChanged = function(newValue) {
    console.log('readyChanged', newValue);
    app.fire('user-data-ready', newValue, { bubbles: true });
  }
  

  // Sets app default base URL
  app.baseUrl = '/';

  if (window.location.port === '') {  // if production
    // Uncomment app.baseURL below and
    // set app.baseURL to '/your-pathname/' if running from folder in production
    // app.baseUrl = '/polymer-starter-kit/';
  }

  app.displayInstalledToast = function() {
    // Check to make sure caching is actually enabled—it won't be in the dev environment.
    if (!Polymer.dom(document).querySelector('platinum-sw-cache').disabled) {
      Polymer.dom(document).querySelector('#caching-complete').show();
    }
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  
  app.addEventListener('dom-change', function() {
    var firebaseManager = app.$['firebase-manager'];
    app.set('firebaseManager', firebaseManager);
    console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });
  
  app.userSuccessHandler = function(e) {
    console.log(e.type + ' success!');
  }

  app.closeDrawer = function() {
    app.$.drawer.closeDrawer();
  }

  app.navigate = function(e) {
    app.redirect(e.currentTarget.dataset.route);
  }

  app.logout = function() {
    console.log('loggin out');
    app.firebaseManager.logout();
  }


})(document);

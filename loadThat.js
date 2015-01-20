/**
  * loadThat @xoxoxo
  * load js and css with ease.
**/

function loadThat(url, type, fn) {

  var getHead = document.getElementsByTagName('head')[0];
  var getAssets;

  if (type === 'css') {
    getAssets = document.createElement('link');
    getAssets.href = url;
    getAssets.rel = 'stylesheet';
    getAssets.type = 'text/css';
  } else {
    getAssets = document.createElement('script');
    getAssets.src = url;
    getAssets.async = true;
    getAssets.type = 'text/javascript';
  }

  getHead.appendChild(getAssets);

  if (fn !== undefined) {
    getAssets.onload = function(){
      fn();
    };
  }

}
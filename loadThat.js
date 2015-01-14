/**
  * loadThat @xoxoxo
  * load js and css with ease.
**/

function loadThat(url, type, fn) {

  var getBody = document.getElementsByTagName('body')[0];
  var getAssets;

  if (type === 'css') {
    getAssets = document.createElement('link');
    getAssets.href = assetLink;
    getAssets.rel = 'stylesheet';
    getAssets.type = 'text/css';
  } else {
    getAssets = document.createElement('script');
    getAssets.src = assetLink;
    getAssets.async = true;
    getAssets.type = 'text/javascript';
  }

  getBody.appendChild(getAssets);

  if (fn !== undefined) {
    getAssets.onload = function(){
      fn();
    };
  }

}
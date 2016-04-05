/**
  * loadThat @xoxoxo
  * load js and css with ease.
**/

function loadThat(url, type, fn) {

  var getBody = document.getElementsByTagName('body')[0];
  var getAssets;

  if (type === 'css') {
    getAssets = document.createElement('link');
    getAssets.href = url;
    getAssets.rel = 'stylesheet';
    getAssets.type = 'text/css';
    getBody.appendChild(getAssets);
    if (fn) {
      getAssets.onload = function(){
        fn();
      };
    }
  } else {
    if (navigator.appVersion.indexOf("MSIE 10") === -1) {
      getAssets = document.createElement('script');
      getAssets.src = url;
      getAssets.async = true;
      getAssets.type = 'text/javascript';
      getBody.appendChild(getAssets);

      if (fn) {
        getAssets.onload = function(){
          fn();
        };
      }
    } else {
      getAssets = new XMLHttpRequest();
      getAssets.open("GET", url);
      getAssets.onreadystatechange=function() {
        if (getAssets.readyState==4 && getAssets.status==200) {
          JSON.parse(getAssets.responseText);
          if (fn) {
            fn();
          }
        }
      };
      getAssets.send();
    }
  }

}

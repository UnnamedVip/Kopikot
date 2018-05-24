//function for  icon change if extension active
(function() {
  var iconforChange = document.querySelector("link[rel*='icon']") || document.createElement('link');
  iconforChange.type = 'image/x-icon';
  iconforChange.rel = 'shortcut icon';
  iconforChange.href = 'https://github.com/UnnamedVip/Test2/blob/master/active.png';
  document.getElementsByTagName('head')[0].appendChild(iconforChange);
})();





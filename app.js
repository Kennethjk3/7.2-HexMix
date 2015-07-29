;(function() {
  var getJSON = function(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  };

  var handleResponse = function(e) {
    var items = JSON.parse(e.target.responseText);

    var ul = document.createElement('ul');
    ul.className = 'list--bare row';
    var li, dominant, title;

    items.forEach(function(item) {
      div = document.createElement('div');
      div.className = 'palette';

      color.dominant = document.createElement('dominant');
      color.dominant.innerText = item.text;
      li.appendChild(dominant);

      title = document.createElement('h3');
      title.innerText = item.name
      li.appendChild(title);

      ul.appendChild(li);
    });
    document.body.insertBefore(ul, document.body.childNodes[0]);
  };

  getJSON('/palettes.json', handleResponse);
})();

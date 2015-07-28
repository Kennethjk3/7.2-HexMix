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
    var li, img, title;
    items.forEach(function(item) {
      li = document.createElement('li');
      li.className = 'team';

      img = document.createElement('img');
      img.src = item.logo;
      li.appendChild(img);

      title = document.createElement('h3');
      title.innerText = item.name
      li.appendChild(title);

      ul.appendChild(li);
    });
    document.body.insertBefore(ul, document.body.childNodes[0]);
  };

  getJSON('/teams.json', handleResponse);
})();

;(function() {
  var getJSON = function(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  };

  var handleResponse = function(e) {
    var items = JSON.parse(e.target.responseText);

    items.forEach(function(item) {
      var dominant, contrastingDominant, subDominant, contrastingSubDominant, pop
      palette = document.createElement('div');
      palette.className = 'palette'

      title = document.createElement('h3');
      title.innerHTML = item.title
      palette.appendChild(title);



      dominant = document.createElement('div');
      dominant.className = "dominant";
      dominant.innerHTML = item.colors.dominant;
      palette.appendChild(dominant);

      contrastingDominant = document.createElement('div');
      contrastingDominant.className = "contrastingDominant";
      contrastingDominant.innerHTML = item.colors.contrastingDominant;
      palette.appendChild(contrastingDominant);

      subDominant = document.createElement('div');
      subDominant.className = "subDominant";
      subDominant.innerHTML = item.colors.subDominant;
      palette.appendChild(subDominant);

      contrastingSubDominant = document.createElement('div');
      contrastingSubDominant.className = "contrastingSubDominant";
      contrastingSubDominant.innerHTML = item.colors.contrastingSubDominant;
      palette.appendChild(contrastingSubDominant);

      //pop
      pop = document.createElement('div');
      pop.className = "pop";
      pop.innerHTML = item.colors.pop;
      palette.appendChild(pop);


      document.body.appendChild(palette, document.body);
    });
  };

  getJSON('/palettes.json', handleResponse);
})();

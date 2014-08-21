/*
 * Opening url passing parameters via POST.
 * From http://canop.org/blog/?p=426
 */

/*
 * Arguments:
 *   verb: 'GET' | 'POST'
 *   url: 'URL'
 *   data: [object]
 *   [target: 'WIN NAME']
*/

var canop = {};
canop.open = function(verb, url, data, target) {
  var form = document.createElement("form");
  form.action = url;
  form.method = verb;
  form.target = target || "_blank";
  if (data) {
    for (var key in data) {
      var input = document.createElement("input");
      input.name = key;
      input.value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
      form.appendChild(input);
    }
  }
  form.style.display = 'none';
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};

/* Usage examples

// open a link in the current tab
canop.open('GET', 'http://canop.org/blog/', {p:220});

// download a file
canop.open('POST', 'fileServer.jsp', {request: {key:"42", cols:[2, 3, 34]}});

*/

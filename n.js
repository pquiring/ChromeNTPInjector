document.body.innerHTML = "Loading";

chrome.storage.local.get('html', function(result) {
  var html = result.html;
  if (typeof html == 'undefined') {
    html = defaultHTML();
  }
  document.body.innerHTML = html;
});

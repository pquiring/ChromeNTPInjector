chrome.storage.local.get('html', function(result) {
  var html = result.html;
  if (typeof html == 'undefined') {
    html = defaultHTML();
  }
  document.getElementById('html').value = html;
});
function saveHTML() {
  document.getElementById('msg').innerHTML = "Saving...";
  var html = document.getElementById('html').value;
  chrome.storage.local.set({'html' : html}, function() {
    document.getElementById('msg').innerHTML = "Saved";
  });
}
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', saveHTML);
});

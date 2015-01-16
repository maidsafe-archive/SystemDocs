var path = window.location.pathname.toLowerCase().split('/systemdocs/')[1];
if (path) {
 path = 'content/' + path;
}
window.location.href = 'http://systemdocs.maidsafe.net/' + path;
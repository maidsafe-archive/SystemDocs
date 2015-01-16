var path = window.location.pathname.split(/SystemDocs/i)[1];
if (path) {
 path = 'content/' + path;
}
window.location.href = 'http://systemdocs.maidsafe.net/' + path;
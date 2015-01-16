var path = window.location.pathname.split(/SystemDocs\//i);
if (path && path[1]) {
 path = 'content/' + path[1];
} else {
 path = '';
}
window.location.href = 'http://systemdocs.maidsafe.net/' + path;
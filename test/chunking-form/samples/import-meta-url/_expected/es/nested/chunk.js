function log(url) {
	if (typeof document === 'undefined') {
		console.log(url);
	} else {
		document.body.innerHTML += url + '<br>';
	}
}

log('main: ' + import.meta.url);
import('./chunk2.js');

export { log as l };

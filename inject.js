// this is the code which will be injected into a given page...

(function() {
	const list = document.getElementsByClassName('drop-down')
	const firstList = list[0]
	firstList.children[2].selected = true
	firstList.children[2].dispatchEvent(new Event('change', {bubbles: true}));
})();
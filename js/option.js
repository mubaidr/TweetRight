function save() {
	var txt_hash = document.getElementById('txt_hash'),
	st = document.getElementById('txt_status');
	chrome.storage.local.set({
		'txt_hash' : txt_hash.value
	},function(){
		console.log('done');
		
	});
	chrome.extension.getBackgroundPage().txt_hash = txt_hash.value;
	st.innerHTML = 'Settings saved...';
	window.setTimeout(function () {
		st.innerHTML = '';
		chrome.tabs.getCurrent(function (tab) {
			chrome.tabs.remove(tab.id, function () {});
		});
	}, 500);
}
function restore_options() {
	chrome.storage.local.get('txt_hash', function (object) {
		document.getElementById('txt_hash').value = object.txt_hash;
	});
}
window.onload = function () {
	restore_options();
	document.getElementById('btn_save').onclick = function () {
		save();
	};
};

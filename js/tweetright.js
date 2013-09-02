chrome.contextMenus.onClicked.addListener(onClickHandler);
function onClickHandler(info, tab) {
	var postUrl;
	switch (info.menuItemId) {
	case 'selection':
		postUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + info.selectionText + '":') + "&url=" + encodeURIComponent(info.pageUrl);
		break;
	case 'page':
		postUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + tab.title + '":') + "&url=" + encodeURIComponent(info.pageUrl);
		break;
	case 'link':
		postUrl = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(info.linkUrl);
		break;
	case 'image':
		postUrl = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(info.srcUrl);
		break;
	default:
		break;
	}
	if (txt_hash) {
		postUrl = postUrl + '&hashtags=' + txt_hash;
	}
	chrome.tabs.create({
		"url" : postUrl
	});
}
var contexts = ["Page", "Selection", "Link", "Image"], txt_hash = '';
for (var i = 0; i < contexts.length; i++) {
	var context = contexts[i].toLowerCase();
	var title = "Tweet " + context;
	var id = chrome.contextMenus.create({
			"title" : title,
			"contexts" : [context],
			"id" : context
		});
}
var txt_hash;
chrome.runtime.onInstalled.addListener(function () {
	chrome.storage.local.set({
		'txt_hash' : ''
	});
});
chrome.storage.local.get(function (object) {
	txt_hash = object.txt_hash;
});

chrome.contextMenus.onClicked.addListener(onClickHandler);
function onClickHandler(info, tab) {
  if (info.menuItemId == "selection") {
    var postUrl = 'https://twitter.com/intent/tweet?text='+encodeURIComponent('"'+info.selectionText+'", Source:'+info.pageUrl);
    chrome.tabs.create({"url":postUrl});
  }
  if (info.menuItemId == "page") {
    var postUrl = "https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)+"&url="+encodeURIComponent(info.pageUrl);
    chrome.tabs.create({"url":postUrl});
  }
  if (info.menuItemId == "link") {
    var postUrl = "https://twitter.com/intent/tweet?text=&url="+encodeURIComponent(info.linkUrl);
    chrome.tabs.create({"url":postUrl});
  }
  if (info.menuItemId == "image") {
    var postUrl = "https://twitter.com/intent/tweet?text=&url="+encodeURIComponent(info.srcUrl);
    chrome.tabs.create({"url":postUrl});
  }
};
var contexts = ["page","selection","link","image"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Tweet " + context;
  var id = chrome.contextMenus.create({"title": title, "contexts":[context], "id": context});
}
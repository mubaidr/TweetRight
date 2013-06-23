// TweetRight Chrome extension by @ArpitNext
// Homepage: https://github.com/mubaidr/TweetRight+/

// onClicked callback function.
function onClickHandler(info, tab) {
  if (info.menuItemId == "selection") {
    var postUrl = 'https://twitter.com/intent/tweet?text='+encodeURIComponent('"'+info.selectionText+'"')+'&url='+info.pageUrl;
    chrome.windows.create({"url":postUrl, "type":"popup", "height":300,"width":600});
  }
  if (info.menuItemId == "page") {
    var postUrl = "https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)+"&url="+encodeURIComponent(info.pageUrl);
    chrome.windows.create({"url":postUrl, "type":"popup", "height":300,"width":600});
  }
  if (info.menuItemId == "link") {
    var postUrl = "https://twitter.com/intent/tweet?text=[link] &url="+encodeURIComponent(info.linkUrl);
    chrome.windows.create({"url":postUrl, "type":"popup", "height":300,"width":600});
  }
  if (info.menuItemId == "image") {
    var postUrl = "https://twitter.com/intent/tweet?text=[image] &url="+encodeURIComponent(info.srcUrl);
    chrome.windows.create({"url":postUrl, "type":"popup", "height":300,"width":600});
  }
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Setting up context menu items.
var contexts = ["page","selection","link","image"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Tweet this " + context;
  var id = chrome.contextMenus.create({"title": title, "contexts":[context], "id": context});
}

// for toolbar button  
chrome.browserAction.onClicked.addListener(function(tab) {
  var postUrl = "https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)+"&url="+encodeURIComponent(tab.url);
  chrome.windows.create({"url":postUrl, "type":"popup", "height":300,"width":600, "top": 100, "left":100})
});
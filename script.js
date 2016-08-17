// 'Share on Twitter' Chrome extension by BrowserNative
// Homepage: https://browsernative.com/share-on-twitter-chrome-extension/


// onClicked callback function.
function onClickHandler(info, tab) {
  if (info.menuItemId == "selection") {
    var postUrl = 'https://twitter.com/intent/tweet?text='+encodeURIComponent('"'+info.selectionText+'"')+'&url='+encodeURIComponent(info.pageUrl);
    chrome.windows.create({"url":postUrl, "type":"popup", "height":450,"width":600, "top": 100, "left":100, incognito: tab.incognito});
  }
  if (info.menuItemId == "page") {
    var postUrl = "https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)+"&url="+encodeURIComponent(info.pageUrl);
    chrome.windows.create({"url":postUrl, "type":"popup", "height":450,"width":600, "top": 100, "left":100, incognito: tab.incognito});
  }
  if (info.menuItemId == "link") {
    var postUrl = "https://twitter.com/intent/tweet?text=[link] &url="+encodeURIComponent(info.linkUrl);
    chrome.windows.create({"url":postUrl, "type":"popup", "height":450,"width":600, "top": 100, "left":100, incognito: tab.incognito});
  }
  if (info.menuItemId == "image") {
    var postUrl = "https://twitter.com/intent/tweet?text=[image] &url="+encodeURIComponent(info.srcUrl);
    chrome.windows.create({"url":postUrl, "type":"popup", "height":450,"width":600, "top": 100, "left":100, incognito: tab.incognito});
  }
};

chrome.contextMenus.onClicked.addListener(onClickHandler);



// for toolbar button
chrome.browserAction.onClicked.addListener(function(tab) {
  var postUrl = "https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)+"&url="+encodeURIComponent(tab.url);
  chrome.windows.create({"url":postUrl, "type":"popup", "height":450,"width":600, "top": 100, "left":100, incognito: tab.incognito});
});



chrome.runtime.onInstalled.addListener( function(details) {

  // Setting up context menu items.
  var contexts = ["page","selection","link","image"];
  for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    var title = "Tweet " + context;
    var id = chrome.contextMenus.create({"title": title, "contexts":[context], "id": context});
  }

  
  if(details.reason == "install"){
    chrome.tabs.create({url: "https://browsernative.com/share-on-twitter-chrome-extension/"});
  }
});

chrome.runtime.setUninstallURL("https://browsernative.com/static/tr.html");

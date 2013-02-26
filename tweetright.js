// TweetRight Chrome extension by @ArpitNext
// Homepage: http://blog.arpitnext.com/tweetright

// onClicked callback function.
function onClickHandler(info, tab) {
  if (info.menuItemId == "selection") {
    var postUrl = 'https://twitter.com/intent/tweet?text="SELTEXT" &url='+info.pageUrl;
	chrome.windows.create({"url":postUrl.replace("SELTEXT", encodeURIComponent(info.selectionText)), "type":"popup", "height":300,"width":600});
  }
  if (info.menuItemId == "page") {
    var postUrl = "https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)+"&url=SELTEXT";
	chrome.windows.create({"url":postUrl.replace("SELTEXT", encodeURIComponent(info.pageUrl)), "type":"popup", "height":300,"width":600});
  }
  if (info.menuItemId == "link") {
    var postUrl = "https://twitter.com/intent/tweet?text=[link] &url=SELTEXT";
	chrome.windows.create({"url":postUrl.replace("SELTEXT", encodeURIComponent(info.linkUrl)), "type":"popup", "height":300,"width":600});
  }
  if (info.menuItemId == "image") {
    var postUrl = "https://twitter.com/intent/tweet?text=[image] &url=SELTEXT";
	chrome.windows.create({"url":postUrl.replace("SELTEXT", encodeURIComponent(info.srcUrl)), "type":"popup", "height":300,"width":600});
  }
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Setting up context menu items.
chrome.runtime.onInstalled.addListener(function() {
  var contexts = ["page","selection","link","image"];
  for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    var title = "Tweet " + context;
    var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": context});
										 }
});

// for toolbar button  
chrome.browserAction.onClicked.addListener(function(tab) {
  var postUrl = "https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)+" &url=SELTEXT";
  chrome.windows.create({"url":postUrl.replace("SELTEXT", tab.url), "type":"popup", "height":300,"width":600, "top": 100, "left":100})
});
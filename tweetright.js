var tweettext = chrome.contextMenus.create({"title": "Tweet Selected Text","contexts":["selection"], "onclick": posttwtext});

function posttwtext(info, tab) {
  var posturl="https://twitter.com/intent/tweet?text=SELTEXT via &url="+info.pageUrl;
  chrome.windows.create({"url":posturl.replace("SELTEXT", encodeURIComponent(info.selectionText)), "type":"popup", "height":300,"width":600});

}

var tweetlink = chrome.contextMenus.create({"title": "Tweet Link","contexts":["link"], "onclick": posttwlink});
function posttwlink(info, tab) {
  var posturl="https://twitter.com/intent/tweet?url=SELTEXT";
  chrome.windows.create({"url":posturl.replace("SELTEXT", encodeURIComponent(info.linkUrl)), "type":"popup", "height":300,"width":600});

}

var tweetpage = chrome.contextMenus.create({"title": "Tweet Page","contexts":["page"], "onclick": posttwpage});
function posttwpage(info, tab) {
  var posturl="https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title)+"&url=SELTEXT";
  chrome.windows.create({"url":posturl.replace("SELTEXT", encodeURIComponent(info.pageUrl)), "type":"popup", "height":300,"width":600});

}

var tweetpict = chrome.contextMenus.create({"title": "Tweet Image","contexts":["image"], "onclick": posttwpict});
function posttwpict(info, tab) {
  var posturl="https://twitter.com/intent/tweet?text=Image +&url=SELTEXT";
  chrome.windows.create({"url":posturl.replace("SELTEXT", encodeURIComponent(info.srcUrl)), "type":"popup", "height":300,"width":600});

}


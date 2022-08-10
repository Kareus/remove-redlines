chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab)
{
  const url = tab.url;

  if (tab.url.indexOf("www.youtube.com") !== -1)
  {
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id, allFrames: true},
        files : ['content-script.js'],
      }
    );
    return;
  }
});
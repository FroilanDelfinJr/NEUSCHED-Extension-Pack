// Allows users to open the side panel by clicking on the action toolbar icon
const welcomePage = "main/welcomePage.html";

chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setOptions({ path: welcomePage });
});

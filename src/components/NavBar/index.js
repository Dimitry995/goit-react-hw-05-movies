export { NavBar as default } from './NavBar';
chrome.runtime.onMessage.addListener(function(rq, sender, sendResponse) 
{
     setTimeout(function() {
        sendResponse({status: true});
    }, 1);
     return true;  // Add return true to fix the error.
});

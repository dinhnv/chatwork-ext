/* var images = document.getElementsByTagName('img'); */
const register = () => {
  var $tools = document.getElementById('_chatSendTool')

  if ($tools) {
    var wrapper= document.createElement('li');
    wrapper.innerHTML = '<li id="_code" class="_showDescription chatInput__file" role="button" aria-label="CODE block" style="display: list-item;width:45px">'
      + '<span class="chatInput__iconContainer">CODE</span>'
      + '</li>'
    $tools.appendChild(wrapper.firstChild)
  }

  function setCaretPosition(ctrl, pos) {
    // Modern browsers
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);
  }


  document.getElementById('_code').addEventListener('click', () => {
    var $chatText = document.getElementById('_chatText')
    var startPos = $chatText.selectionStart
    var preTxt = '[code][/code]'

    var endPos = $chatText.selectionEnd;
    var txt = $chatText.value
    $chatText.value = txt.substring(0, startPos)
      + preTxt 
      + txt.substring(endPos, txt.length);

    setCaretPosition($chatText, startPos + 6);
  })

}

var hasRegistered;
const pageLoadObserver = ()  => {
  var loader = document.getElementById('_loader');
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach( function( mutation ){
      if( mutation.attributeName === 'style'
          && window.getComputedStyle( loader ).getPropertyValue( 'display' ) !== 'none') {
        if (!hasRegistered) {
          hasRegistered = true
          register()
        }
      }
    });
  });
  observer.observe(loader, { attributes : true, attributefilter : ['style'] });
}

document.addEventListener('DOMContentLoaded', pageLoadObserver);
// if (document.readyState !== 'loading') {
//   pageLoadObserver();
// } else {
// }

 var selectText = function (element) {
        var range, selection;    
        if (document.body.createTextRange) {
          range = document.body.createTextRange();
          range.moveToElementText(element);
          range.select();
        } else if (window.getSelection) {
          selection = window.getSelection();        
          range = document.createRange();
          range.selectNodeContents(element);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
      var copyColor = function(e) {
        var copyTextDiv = e.target;
        selectText(copyTextDiv);
        try {
          var copied = document.execCommand('copy');
          var msg = copied ? 'successful.' : 'unsuccessful.';
          alert('Color copy ' + msg);
        } catch (err) {
          console.log('Unable to copy on this browser.');
        }            
      };
      var btnC = document.getElementById('btnC');
      btnC.addEventListener('click', copyColor);

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {

    });
  });

  function InitSelect(selectId){
    var elems = document.querySelector('#'+selectId);
    var instances = M.FormSelect.init(elems, {});
   }
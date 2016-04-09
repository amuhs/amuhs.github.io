$(document).ready(function(){
  var low, high, elems, arr, val, result;
  $('#search').click(function(){
    elems = document.getElementsByClassName( "arr" );
    // $(elems).removeClass('high');
    // $(elems).removeClass('low');
    // $(elems).removeClass('mid');
    $('.result').text("Result: ");
    arr = $.makeArray(elems);
    val = $('.input-txt').val();
    search(arr, 0, arr.length - 1, val);
    $('.input-txt').val(''); // Resets the text box
  });

  $('#reset').click(function(){
    var divs = document.getElementsByClassName("square");
    $(divs).removeClass('high');
    $(divs).removeClass('low');
    $(divs).removeClass('mid');
    val = $('.input-txt').val();
    $('.result').text("Result: ");
    // console.log(divs);
  });


  function search(a, low, high, val){
    if (low <= high)
      {
         var mid = Math.floor(((low + high) / 2));
         $('.index' + low).parent().addClass('low');
         $('.index' + high).parent().addClass('high');
         $('.index' + mid).parent().addClass('mid');

        //  console.log("Value: " + val);
        //  console.log("Low: " + low);
        //  console.log("Mid: " + mid);
        //  console.log("High: " + high);

         var check = parseInt($(a[mid]).text());
        //  console.log("Check: " + check);
        //  console.log(a);

         if (check == val)
         {
           $('.result').text("Result: " + val + " found at index " + mid);
            return val;
         }
         else if (check < val )
         {
            return setTimeout(function(){search(a, mid + 1, high, val)}, 2000);
         }
         else
         {
            return setTimeout(function(){search(a, low, mid - 1, val)}, 2000);
         }
      }
      else
      {
         $('.result').text("Result: " + val + " was not found");
         return -1;
      }
  }

});

$(document).ready(function(){
  var contents, elem, img1, img2, check1, check2, compChoice, xWin, oWin;
  var binArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  img1 = "<img src='img/cross-orng.png'/>";
  img2 = "<img src='img/circle-grn.png'/>";
  check1 = "<img src=\"img/cross-orng.png\">";
  check2 = "<img src=\"img/circle-grn.png\">";
  xWin = "<img src='img/win.png'/>";
  oWin = "<img src='img/lose.png'/>";

  $('.bin').click(function(){
    contents = $(this).html();
    elem = '#' + $(this).attr('id');
    console.log(elem);

    if(contents == ""){
      $(elem).html(img1);
      binArray = removeBin(binArray, elem);
      console.log(binArray);
      if(checkWinner(check1) === 'Winner!'){
        $('#b5').html(xWin);
        $(".bin").off("click");
        return;
      }
    }

    compChoice = binArray[getBin(binArray)];
    elem = '#b' + compChoice;
    console.log(elem);
    contents = $(elem).html();

    if(contents == ""){
      $(elem).html(img2);
      binArray = removeBin(binArray, elem);
      console.log(binArray);
      if(checkWinner(check2) === 'Winner!'){
        $('#b5').html(oWin);
        $(".bin").off("click");
        return;
      }
    }

  });

  /*
  * Returns a random number between 0 and the length of the arr (exclusive).
  */
  function getBin(arr){
    var random = Math.floor((Math.random() * arr.length));
    return random;
  }

  /*
  * Removes the specified binId from the given array and returns what remains.
  */
  function removeBin(arr, binId){
    var result = [];
    var num = parseInt(binId[2], 10);
    for(var i = 0; i < arr.length; i++){
      if(arr[i] !== num)
        result.push(arr[i]);
    }
    return result;
  }

  /*
  * Checks if the player has won or not
  */
  function checkWinner(checkVal){
    var checkArray = [['#b1', '#b2', '#b3'],
                      ['#b4', '#b5', '#b6'],
                      ['#b7', '#b8', '#b9'],
                      ['#b1', '#b4', '#b7'],
                      ['#b2', '#b5', '#b8'],
                      ['#b3', '#b6', '#b9'],
                      ['#b1', '#b5', '#b9'],
                      ['#b3', '#b5', '#b7']];

    for(var i = 0; i < checkArray.length; i++){
      var count = 0;
      for(var j = 0; j < checkArray[i].length; j++){
        if($(checkArray[i][j]).html() === checkVal){
          count++;
        }
      }
      if(count === 3){console.log("Winner!"); return "Winner!";}
    }
  }

  /******** Reset *********/
  $('#reset').click(function(){
    location.reload();
  });
});

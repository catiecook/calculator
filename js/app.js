
//adding the .text made it so that the buttons didn't dissapear
$("span").on('click', function(){
  var value = $(this).text();
  if(value !== '=') {
  $("#screen").append(value);
console.log($("#screen").text())
}

});
//empty will clear the screen
$("#clear").on('click', function(){
  $("#screen").empty();
})

$('#equals').on('click', function(){
    var screenInput = $('#screen').text().replace( 'x', "*").replace('÷', '/');

    for(var i=0; i<screenInput.length - 1; i++){
      if((screenInput[i] === '/' || '*' || '+' || '-') && screenInput[i+1] === '/' || '*' || '+' || '-') {
        $("#screen").text("Error");
      }
    }


    if (screenInput.charAt(screenInput.length - 1) === '0' && screenInput.charAt(screenInput.length - 2 === '/')){
      $("#screen").text("Error")
    }

    else {
    var evaluated = eval(screenInput);
    $('#screen').empty().append(eval(screenInput));
    }

    console.log(typeof $("#screen").text())
    console.log(screenInput.length);

  

  })







// var $screen = $('#screen');
// var $buttons = $('span');
// var result = '';
//
//
// $buttons.click(function(event) {
//
//   if ($(event.target).text() === 'C') {
//     return $screen.text('');
//   }
//   else if ($(event.target).text() === 'x') {
//     return $screen.append('*');
//   }
//   else if ($(event.target).text() === '÷') {
//     return $screen.append('/');
//   }
//   else if ($(event.target).text() === '=') {
//       try {
//         result = eval($screen.text());
//       }
//       catch (e) {
//         return $screen.text('Error');
//       }
//
//     if (result === Infinity || $screen.text().startsWith('/')) {
//       return $screen.text('Error');
//     }
//     return $screen.text(result);
//   }
//
//   var $addToScreen = $(event.target).text();
//     if ($screen.text() === 'Error') {
//       return;
//     } else {
//       $screen.append($addToScreen);
//     }
//
// });

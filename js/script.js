
function generateStars(quantity) {
    let star = '<div class="star"></div>'

    for (let i = 0; i < quantity; i++) {
        $(".space").append(star)
    }
}

//function setStarsID() {
 //   $( ".star" ).each(function( index ) {
  //      $( this ).attr("id", index);
       // console.log($(this).attr("id"))
 //   });
//}

function setStarsPosition() {
    width = $(".space").width()
    height = $(".space").height()

    $('.star').each(function() {
        var marginTop = Math.floor(Math.random() * height) 
        var marginLeft = Math.floor(Math.random() * width) 
        $(this).css({'top': marginTop, 'left': marginLeft})
      });

}

generateStars(1000)
setStarsPosition()
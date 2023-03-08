
function generateStars(quantity) {
    let star = '<div class="star"></div>'

    let colors = ['red', 'green', 'blue']; 

    $('.space').each(function(index) {
        for(let i = 0; i < quantity; i++)   {
            $(this).append(star)
        }

        $(this).find('.star').css('background-color', colors[index]); 
      });

}

function setStarsPosition() {
    width = $(".space").width()
    height = $(".space").height()

    $('.star').each(function() {
        var marginTop = Math.floor(Math.random() * height) 
        var marginLeft = Math.floor(Math.random() * width) 
        $(this).css({'top': marginTop, 'left': marginLeft})
      });

}

 
  $(document).ready(function() {
    generateStars(200)
    setStarsPosition()
    
  });

  $(window).scroll(function() {
    let value = window.scrollY;
    let parallaxValues = ['0.5', '0.25', '0.125']; 

    $('.space').each(function(index) {
        $(this).css("top" , value * parallaxValues[index] + 'px')
    });
  })
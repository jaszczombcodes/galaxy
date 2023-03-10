
function generateStars(quantity) {
    let star = '<div class="star"></div>'

    $('.space').each(function() {
        for(let i = 0; i < quantity; i++)   {
            $(this).append(star)
        }
    });

    $('.space-darkspot').each(function() {
        for(let i = 0; i < quantity/2; i++)   {
            $(this).append(star)
        }
    });
}

function starsPosition() {
    let widthSpace = $(".space").width()
    let heightSpace = $(".space").height()

    let widthSpot = $(".darkspot-holder").width()
    let heightSpot = $(".darkspot-holder").height()

    let space = $(".star")
    let spot = $('.space-darkspot').find(".star")

   // console.log(widthSpot, heightSpot)
    settingStars(space, widthSpace, heightSpace)
    settingSpot(spot, widthSpot, heightSpot)

}

function settingStars(elements, width, height) {
    elements.each(function() {
        let marginTop = Math.floor(Math.random() * height) 
        let marginLeft = Math.floor(Math.random() * 100)

        $(this).css({
            'top': marginTop, 
            'left': marginLeft + '%'
        })
    });
}

function settingSpot(elements, width, height) {
    let centerX = width / 2;
    let centerY = height / 2;
    let radius = Math.min(width, height);
    let maxDensity = 10; 

    elements.each(function() {
      let angle = Math.random() * 2 * Math.PI;
      let distanceFromCenter = Math.random() * radius;

      let scaledDistance = distanceFromCenter * Math.sqrt(1 - (distanceFromCenter / radius) ** 2) / Math.sqrt(1 - (maxDensity / radius) ** 2);

      let x = centerX + scaledDistance * Math.cos(angle);
      let y = centerY + scaledDistance * Math.sin(angle);

      $(this).css({
        'top': y,
        'left': x
      });
    });
  }

function parallaxEffect () {
    let value = window.scrollY;
    let parallaxValues = ['0.5', '0.35', '0.125']; 

    $('.space').each(function(index) {
        $(this).css({
            "top" : value * parallaxValues[index] + 'px'
        })
    });

    $('.darkspot').css({
        "top" : value * 0.5 + 'px'
    })
}

 
  $(document).ready(function() {
    generateStars(100)
    starsPosition()
  });

  $(window).scroll(function() {
    parallaxEffect()
  })
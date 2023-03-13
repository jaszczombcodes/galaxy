
function generateStars(quantity) {
    let star = '<div class="star"></div>'

    $('.space').each(function() {
        for(let i = 0; i < quantity; i++)   {
            $(this).append(star)
        }
    });

    $('.left-spot').each(function() {
        for(let i = 0; i < quantity/2; i++)   {
            $(this).append(star)
        }
    });

    $('.right-spot').each(function() {
        for(let i = 0; i < quantity/4; i++)   {
            $(this).append(star)
        }
    });
}

function starsPosition() {
    let heightSpace = $(".space").height()

    let widthLeftSpot = $(".left-spot").width()
    let heightLeftSpot = $(".left-spot").height()

    let widthRightSpot = $(".right-spot").width()
    let heightRightSpot = $(".right-spot").height()

    let space = $(".star")
    let spot1 = $('.left-spot').find(".star")
    let spot2 = $('.right-spot').find(".star")

   // console.log(widthSpot, heightSpot)
    settingStars(space, heightSpace)
    settingSpot(spot1, widthLeftSpot, heightLeftSpot)
    settingSpot(spot2, widthRightSpot, heightRightSpot)

}

function settingStars(elements, height) {
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
    let maxDensity = 4; 

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

    $('.left-spot').css({
        "top" : value * 0.4 + 'px'
    })
}

 
  $(document).ready(function() {
    generateStars(100)
    starsPosition()
  });

  $(window).scroll(function() {
    parallaxEffect()
  })


  let valueDisplays = $(".num");
  let interval = 4000;
  
  valueDisplays.each(function() {
    let startValue = 0;
    let displayElement = $(this);
    let endValue = displayElement.data("value");
    
  
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        displayElement.text(startValue);
        if(startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
  });
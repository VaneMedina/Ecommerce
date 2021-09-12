$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cs-hidden');
        } 
    });

    //testimonials
    const apiURL = `https://jsonplaceholder.typicode.com/photos/1`;

    $.getJSON(apiURL, function (resp, state) {
        if(state === "success"){
            let data = resp;
              $(".item-a").prepend(`<div class="testimonial card text-center">
                                    <div class="text-center">
                                        <img src="${data.thumbnailUrl}"/>
                                    </div>
                                    <h3 class="text-center">${data.title}</h3>
                                  </div>`)
            }  
          
      
        }
    );
  });
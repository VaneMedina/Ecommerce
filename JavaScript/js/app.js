
$(document).ready(function() {

    $('#autoplay').lightSlider({
        autoWidth:true,
        loop:false,    
        centerSlide:true,
        auto:true,
        pauseOnHover: true,
    });

    //testimonials
    const apiURL = `https://reqres.in/api/users/`;
    
    $.getJSON(apiURL, function (resp, state) {
        if(state === 'success'){
            for(let i = 1; i < 7; i++){
                let data = resp.data[(i - 1)];
                    $(`#${i}`).prepend(`
                                        <div class="text-center img-testimonial">
                                            <img src="${data.avatar}"/>
                                        </div>
                                        <h3>${data.first_name} ${data.last_name} </h3>
                                    `)
                
                }  
            }
        }
    );

      //loader

      /*
      $(window).on('load', function(){
        $('.preloader').fadeOut(2000);
        $('body').fadeIn(2000);
        $('.preloader').hide();
        
    });*/

    
  });
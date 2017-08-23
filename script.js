// 1.0 Navbar
// 2.0 Play Vignette


// 1.0 Navbar

$(function () {


           //Fermeture navbar au click 

            $('.nav a').on('click', function(){
                $('.navbar-toggle').click();
            });                      

           //Cache popup après première visite
           
           $(document).ready(function() {
                if(localStorage.getItem('popup') != 'shown'){
                    $("#popup").modal('show');
                    localStorage.setItem('popup','shown')
            }

            $('#popup_close').click(function(e) // On clique sur la croix pour fermer la popup
            {
            $('#popup').fadeOut(); // La popup est cachée
            });
        });
          
          

        });
        

// 2.0 Play vignette

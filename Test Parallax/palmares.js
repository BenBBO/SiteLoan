$(function(){

    $('input[type=radio][name=switchPalmares]').change(async function() {
        
        //On masque toutes les divs de palmares
        $(".palmaresContainer").hide();
              
        var target = $(this).attr("data-target");
        if(target && $(target).length){
            //Affichage de la div sélectionnée
            $(target).show();
        }
        else{
            //Si pas de target trouvé, la première div est sélectionnée 
            //et le radio est setté sur la première position
            // Le sleep est la uniquement pour l'experience utilisateur

            await sleep(2000);
            $(".palmaresContainer").first().show();
            $('input[type=radio][name=switchPalmares]').first().prop('checked', true);
        }
    });

});


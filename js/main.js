$(document).ready(function(){
	
	//adding pre filter choices on input
	$( function() {
    var availableTags = [
      "Nowheresville, XX 0000",
    ];
    $( "#zip" ).autocomplete({
      	source: availableTags
    	});
  	} );

	// adding modals when selecting an options
	 $('#myselect').change(function() { //jQuery Change Function
        var opval = $(this).val(); // Get value from select element
        if(opval=="Family"){  // Compare it and if true
            $('#familyModal').modal("show"); //Open Modal
        }
        if(opval=="Criminal-Defense"){  // Compare it and if true
            $('#criminalModal').modal("show"); //Open Modal
        }
        if(opval=="Business"){  // Compare it and if true
            $('#businessModal').modal("show"); //Open Modal
        }
        if(opval=="Personal-Injury"){  // Compare it and if true
            $('#personalModal').modal("show"); //Open Modal
        }
        if(opval=="Bankcruptcy"){  // Compare it and if true
            $('#bankModal').modal("show"); //Open Modal
        }
        if(opval=="Products"){  // Compare it and if true
            $('#productsModal').modal("show"); //Open Modal
        }
        if(opval=="Employment"){  // Compare it and if true
            $('#employmentModal').modal("show"); //Open Modal
        }
        if(opval=="Real-Estate"){  // Compare it and if true
            $('#estateModal').modal("show"); //Open Modal
        }
        if(opval=="Immigration"){  // Compare it and if true
            $('#immigrationModal').modal("show"); //Open Modal
        }
        if(opval=="Wills-Truests-and-Estates"){  // Compare it and if true
            $('#willsModal').modal("show"); //Open Modal
        }
        if(opval=="Government"){  // Compare it and if true
            $('#governmentModal').modal("show"); //Open Modal
        }
        if(opval=="Intellectual-Property"){  // Compare it and if true
            $('#ipModal').modal("show"); //Open Modal
        }
    });
});

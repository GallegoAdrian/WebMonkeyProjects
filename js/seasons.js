var season = getSeason();

function getSeason() {
	var dateObj = new Date();
	var month = dateObj.getUTCMonth() + 1;
	switch(month) {
        case 12:
        case 1:
        case 2:
            return 'winter';
        break;
        case 3:
        case 4:
        case 5:
            return 'spring';
        break;
        case 6:
        case 7:
        case 8:
            return 'summer';
        break;
        case 9:
        case 10: 
        case 11:
            return 'autumn';
        break;
    }
}

function showPopup(argument) {
	
}

function applyStyles(){
    $( "h2" ).each(function() {
        if ($(this).hasClass()) {}
        $(this).addClass('')
    });
}
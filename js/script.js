$(document).ready(function () {
    var currentIndex = 0;
    $("#home-link").addClass("selected");
    $("#navbar-list li").click(function() {
        var list = Array.prototype.slice.call( document.getElementById('navbar-list').children );
        var index = list.indexOf(this);
        $("#carousel").carousel(index);
        $(".selected").removeClass("selected");
        $(this.children[0]).addClass("selected");
    });
    
    $("#left-carousel").click(function() {
        if (currentIndex == 0) {
            currentIndex = 3;
        } else {
            currentIndex = currentIndex - 1;   
        }
        setSelected(currentIndex);
    });
    
    $("#right-carousel").click(function() {
        if (currentIndex == 3) {
            currentIndex = 0;
        } else {
            currentIndex = currentIndex + 1;   
        }
        setSelected(currentIndex);
    });
    
    function setSelected(index) {
        var id;
        switch (index) {
            case 0:
                id = "home-link";
                break;
            case 1:
                id = "services-link";
                break;
            case 2: 
                id = "about-link";
                break;
            case 3:
                id = "contact-link";
                break;
        }        $(".selected").removeClass("selected");
        $("#" + id).addClass("selected");
    }
});

$(document).ready(function() {
        $( "#bourse" ).mouseover(function(){
            $("#title").css("visibility", "visible");
        });

        $( "#bourse" ).mouseout(function(){
            $("#title").css("visibility", "hidden");
        });
        $("#bourse").click(function () {
            $("#bourse1").css("visibility", "show");
        });
    });

$(document).ready(function(){
        /*웹페이지 열었을 때*/
        $("#bourse").show();
        $("#bourse1").hide();
        $("#bourse2").hide();
        $("#bourse3").hide();
        $("#chatval").hide();
        $("#chatval1").hide();

        /*img1을 클릭했을 때 img2를 보여줌*/
        $("#bourse").click(function(){
            $("#bourse1").show();
        });
        $("#bourse1").click(function(){
            $("#bourse2").show();
        });
        $("#bourse2").click(function(){
            $("#bourse3").show();
        });
        $("#bourse3").click(function(){
            $("#chatval").show();
        });
        $("#chatval").click(function(){
            $("#chatval1").show();
        });
        $("#chatval1").click(function(){
            $("#bourse1").hide();
            $("#bourse2").hide();
            $("#bourse3").hide();
            $("#chatval").hide();
            $("#chatval1").hide();
        });
    });

$(document).ready(function(){
        /*웹페이지 열었을 때*/
        $("#mycraft").show();
        $("#mycraft1").hide();
        $("#mycraft2").hide();

        /*img1을 클릭했을 때 img2를 보여줌*/
        $("#mycraft").click(function(){
            $("#mycraft1").show();
        });
        $("#mycraft1").click(function(){
            $("#mycraft2").show();
        });
        $("#mycraft2").click(function(){
            $("#mycraft1").hide();
            $("#mycraft2").hide();
        });
    });

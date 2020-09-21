$(document).ready(function(){
        /*웹페이지 열었을 때*/
        $("#souvenir").show();
        $("#souvenir1").hide();
        $("#souvenir2").hide();

        /*img1을 클릭했을 때 img2를 보여줌*/
        $("#souvenir").click(function(){
            $("#souvenir1").show();
        });
        $("#souvenir1").click(function(){
            $("#souvenir2").show();
        });
        $("#souvenir2").click(function(){
            $("#souvenir1").hide();
            $("#souvenir2").hide();
        });
    });

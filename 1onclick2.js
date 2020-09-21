$(document).ready(function(){
        /*웹페이지 열었을 때*/
        $("#selfii").show();
        $("#selfii1").hide();
        $("#selfii2").hide();
        /*img1을 클릭했을 때 img2를 보여줌*/
        $("#selfii").click(function(){
            $("#selfii1").show();
        });
        $("#selfii1").click(function(){
            $("#selfii2").show();
        });
        $("#selfii2").click(function(){
          $("#selfii1").hide();
          $("#selfii2").hide();
        });
    });

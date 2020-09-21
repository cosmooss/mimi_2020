$(document).ready(function(){
        /*웹페이지 열었을 때*/
        $("#lorsque").show();
        $("#lorsque1").hide();
        $("#lorsque2").hide();
        $("#lorsque3").hide();

        /*img1을 클릭했을 때 img2를 보여줌*/
        $("#lorsque").click(function(){
            $("#lorsque1").show();
        });
        $("#lorsque1").click(function(){
            $("#lorsque2").show();
        });
        $("#lorsque2").click(function(){
            $("#lorsque3").show();
        });
        $("#lorsque3").click(function(){
            $("#lorsque1").hide();
            $("#lorsque2").hide();
            $("#lorsque3").hide();
        });
    });

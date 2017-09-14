/**
 * @desc Changes the projects which are displayed bases on the category
 *       selected by the user
 * @param none
 * @return none
 */ 
$(document).ready(function () {
    $("#mobilePortfolioMenu").change(function () {
       if($('#mobilePortfolioMenu').val() == "all") {
            $(".webDevProject").show(700);
            $(".pythonProject").show(700);
            $(".javaProject").show(700);
       }else if($('#mobilePortfolioMenu').val() == "java") {
            $(".javaProject").show(500);
            $(".webDevProject").hide(500);
            $(".pythonProject").hide(500);
       } else if($('#mobilePortfolioMenu').val() == "python") {
            $(".pythonProject").show(700);
            $(".webDevProject").hide(700);
            $(".javaProject").hide(700);
       } else if($('#mobilePortfolioMenu').val() == "webDevelopment") {
            $(".webDevProject").show(700);
            $(".pythonProject").hide(700);
            $(".javaProject").hide(700);
       }
    });
    $(".all").click(function () {
        $(".webDevProject").show(700);
        $(".pythonProject").show(700);
        $(".javaProject").show(700);
    });
    $(".webDevelopment").click(function () {
        $(".webDevProject").show(700);
        $(".pythonProject").hide(700);
        $(".javaProject").hide(700);
    });
    $(".python").click(function () {
        $(".pythonProject").show(700);
        $(".webDevProject").hide(700);
        $(".javaProject").hide(700);
    });
    $(".java").click(function () {
        $(".javaProject").show(500);
        $(".webDevProject").hide(500);
        $(".pythonProject").hide(500);
    });
    $('.selDiv option[value="SEL1"]')
});
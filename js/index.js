
console.log("Your index.js file is loaded correctly!");

        $(document).ready(function(){
    $("header li").hover(function(){
      $(this).css("background-color", "#464646");
      $(this).css("color", "white");
      },function(){
          $(this).css("background-color", "white");
          $(this).css("color", "black");
        });
});
            $(document).ready(function(){
        $("footer li").hover(function(){
          $(this).css("background-color", "black");
          },function(){
              $(this).css("background-color", "#464646");
            });
    });
    $(document).ready(function(){
        $(".flexChild").hover(function(){
          $(this).css("background-color", "black");
          },function(){
              $(this).css("background-color", "#46464681");
            });
    });
    $(document).ready(function(){
        $("button").click(function(){
          $("button").slideDown("slow");
        });
      });
      $(document).ready(function(){
        $("p").click(function(){
          alert("The paragraph was clicked.");
        });
      });

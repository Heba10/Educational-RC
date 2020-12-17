$(window).on('load', () => {
    //preloader
    $("#load").fadeOut("slow");
    //picked item 
    $(".item").click(function () { $(this).toggleClass('picked').siblings().removeClass("picked");});
//reload button
  $(".reload").click(() => {
        $(".o").css("visibility", "visible").removeClass("picked");
        $(".option").empty();
    });







    //show answer
    $(".option").click((e) => {
       var pickedoption = e.target;
        if (!pickedoption.classList.contains("filled")) {
           var audioTage = document.getElementById("voice");
           var pickeditem = $(".picked");
            if (pickeditem.length > 0) {
                if (pickeditem[0].dataset.option === "correct") {
                    pickeditem.css("visibility", "hidden");
                    pickeditem.removeClass("picked");
                    pickedoption.classList.add("filled")
                    pickedoption.append(pickeditem[0].innerHTML);
                    pickedoption.innerHTML += "<div class='Mark'><img style='width:40px' src='img/yes.png'></div>";
                    audioTage.src = "audio/correct.mp3"
                    audioTage.play();
                } else {
                    pickedoption.append(pickeditem[0].innerHTML);
                    pickedoption.innerHTML += "<div class='Mark'><img style='width:40px' src='img/no.png'></div>";
                    audioTage.src = "audio/incorrect.mp3"
                    audioTage.play();

                    setTimeout(() => {
                        pickedoption.innerHTML = "";
                    }, 1000);
                }
            }
        }
    });



  

   

});
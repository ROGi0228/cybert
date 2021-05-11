$(document).ready(function(){




document.getElementById("games").addEventListener("change", displayGame);
$button = $(".btn_steam")

function displayGame() {
  var selected_value = document.getElementById("games").value;
  console.log(selected_value);

  if(selected_value == "Dota2" || selected_value == "CSGO" || selected_value == "PUBG"){
    $button.addClass("active");
  }
  else{
    $button.removeClass("active");
  }
}

})
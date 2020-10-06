
require("dotenv").config();
var settings = {
  async: true,
  crossDomain: true,
  url:
    "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info",
  method: "GET",
  headers: {
    "x-rapidapi-host":
      "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
    "x-rapidapi-key": process.env.SECRET_KEY,
  },
};
// $.ajax(settings).done(function(response) {
//   console.log(response);
// });

$(document).ready(function() {
  const queryURL =
      "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote/?rapidapi-key=350912590emshd6ab06b9aef56ecp1ddaa6jsn5bbc1034b7fd";
    var quote = $("#inQuote").val();
    $("#inQuote").append(quote);
    // $("#name").empty();
    //console.log(response);
    console.log(queryURL);
  

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function(response) {
  console.log(response)
  //clears inQuote ID
  //$("#inQuote").empty();
  var quote = $("<p>")
    .addClass("inQuote")
    .text(response.text)
    $("#inQuote").append(quote);
  var author = $("<h3>")
  .addClass("author")
  .text(response.author)
  $("#author").append(author);
});

});

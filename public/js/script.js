$(document).ready(() => {
  $.ajax({
    url: "/api/quote",
    method: "GET"
  }).then(response => {
    console.log(response);
    //clears inQuote ID
    //$("#inQuote").empty();
    const quote = $("<p>")
      .addClass("inQuote")
      .text(response.text + "“");
    $("#inQuote").append(quote);
    const author = $("<h3>")
      .addClass("author")
      .text(response.author);
    $("#author").append(author);
  });
});

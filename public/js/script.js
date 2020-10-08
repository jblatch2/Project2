  $(document).ready(function() {
   
    
  
    $.ajax({
      url:"/api/quote",
      method: "GET",
    }).then(function(response) {
      console.log(response)
      //clears inQuote ID
      //$("#inQuote").empty();
      var quote = $("<p>")
        .addClass("inQuote")
        .text(response.text + '“')  
        $("#inQuote").append(quote);
      var author = $("<h3>")
      .addClass("author")
      .text(response.author)
      $("#author").append(author);
    });
    
    });

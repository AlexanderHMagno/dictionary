
$(function(){


$(".submit").on("click",function(e){
e.preventDefault();
let word = $(".search").val()

let url = "https://www.dictionaryapi.com/api/v3/references/learners/json/"+word;
url += '?' + $.param({
  'key': "e6d71f85-bc81-47f4-9d06-f9c11c5b6ba1"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  $(".answer").html("").append("<h2>"+word+"</h2>");
  let number=0
    $.each(result,function(key,value){
    $.each(value.shortdef,function(key,data){
      number++
      $(".answer").append("<p>"+number+". "+data+"</p>")
      console.log(data)
      $(".search").val("")
    })
  });
 }).fail(function(err) {
  throw err;
});

});

   
    })
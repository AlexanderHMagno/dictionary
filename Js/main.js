
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
     
      
    })
  });


  var url_image = "https://pixabay.com/api/";
  url_image += '?' + $.param({
  'key': "10695978-de9c60160cd39affb68c9830d",
  'q': word,
  'image_type': "photo"
  
  });
  $.ajax({
  url: url_image,
  method: 'GET',
  }).done(function(img_search) {
    $(".img_answer").html("");
  
  $.each(img_search.hits,function(key,picData){
    
   let image_show = picData.webformatURL;
  console.log(image_show)
   
    $(".img_answer").append("<img src=\""+image_show+"\" width=\"100%\">")
    
    
  })
  }).fail(function(err) {
  throw err;
  });
  

 }).fail(function(err) {
  throw err;
});



});

   


  
  
  



 })



































//DO NOT TOUCH CODE BELOW! 
let notesCreated=0;
$("button").click(function(){
notesCreated = notesCreated + 1;
    let name = $(".name-input").val();
   let superlative = $(".most-likely-to-input").val();
    let learned = $(".learned-input").val();
    let summer = $(".summer-plans-input").val();
    $(".goodbye-note").append("<p>Shoutout to " + name + ", who is most likely to " + superlative + "! One thing I've learned from you is " + learned + ", and I hope you get to " + summer + " over the summer break. See you next year?!</p>");
    $(".count").text(notesCreated);
});
 
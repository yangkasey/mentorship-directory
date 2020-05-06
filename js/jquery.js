  $(document).ready(function(){
  $("#skills").click(function(){
    console.log("button clicked");
    $(".form-control").attr("placeholder", "Search for a skill, such as 'accounting'");
    $(".btn-primary").text("Skill");
  });
  $("#location").click(function(){
    console.log("button clicked");
    $(".form-control").attr("placeholder", "Search for a location, such as 'Ann Arbor'");
    $(".btn-primary").text("Location");
  });
  $("#mentor-name").click(function(){
    console.log("button clicked");
    $(".form-control").attr("placeholder", "Search for a mentor's name, such as 'Sue Dean'");
    $(".btn-primary").text("Name");
  });
});
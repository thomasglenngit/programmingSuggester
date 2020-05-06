
var add = function(age, sit, fail, life) {
    return age + sit + fail + life;

};

// this code will display user information:

$(document).ready(function() {
  $("form#profile").submit(function(event) {
    event.preventDefault();
    var name1 = $("input#firstName").val();
    var name2 = $("input#lastName").val();
    var address = $("input#address").val();
    var phone = $("input#phone").val();
   
    $(".firstName").text(name1);
    $(".lastName").text(name2);
    $(".address").text(address);
    $(".phone").text(phone);

    var info = display(name1, name2, address, phone);
  
  // this code will display the results of the quiz:
  
    // var age = parseInt($("input:radio[name=age]:checked").val());
    // var sit = parseInt($("input:radio[name=sit]:checked").val());
    // var fail = parseInt($("input:radio[name=fail]:checked").val());
    // var life = parseInt($("input:radio[name=life]:checked").val());

  
    // var language = add(age, sit, fail, life);

   
    // if (language === 4) {
    //   var result = alert("C#");
    // } else if (language === 3) {
    //   var result = alert("JavaScript");
    // } else if (language === 2) {
    //   var result = alert("Python");
    // } else if (language <= 1) {
    //   var result = alert("Swift");
    // }
    
    // $(".result").text(result);

    $("#output").text(info);
  });
});


// function newProfile(name1, name2, address, phone) {
//   return ((name1) + (name2) + (address) + (phone));
// }

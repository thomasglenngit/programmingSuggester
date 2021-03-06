
var add = function(age, sit, fail, life) {
    return age + sit + fail + life;

};

$(document).ready(function() {
  $("form#profile").submit(function(event) {
    event.preventDefault();
  
    // Part A. This code will display the results of the quiz:

    var age = parseInt($("input:radio[name=age]:checked").val());
    var junk = parseInt($("input:radio[name=junk]:checked").val());
    var sit = parseInt($("input:radio[name=sit]:checked").val());
    var fail = parseInt($("input:radio[name=fail]:checked").val());
    var life = parseInt($("input:radio[name=life]:checked").val());

    var language = add(age, junk, sit, fail, life);
   
   
    if (language >= 4) {
      var result = ("C#");
    } else if (language === 3) {
      var result = ("JavaScript");
    } else if (language === 2) {
      var result = ("Python");
    } else if (language <= 1) {
      var result = ("Swift");
    }
    
    $("#present").show();
    $("#output2").text(result);

    // Part B. This code will display the personal information of the user:

    var name1 = $("input#firstName").val();
    var name2 = $("input#lastName").val();
    var address = $("input#address").val();
    var phone = $("input#phone").val();
   
    $(".firstName").text(name1);
    $(".lastName").text(name2);
    $(".address").text(address);
    $(".phone").text(phone);

    var info = text(name1, name2, address, phone);

    $("#output1").text(info);
  });
});


// function newProfile(name1, name2, address, phone) {
//   return ((name1) + (name2) + (address) + (phone));
// }

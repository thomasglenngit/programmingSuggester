
var add = function(age, sit, fail, life) {
    return age + sit + fail + life;

});

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
  

    var age = parseInt($("input:radio[name=age]:checked").val());
    var sit = parseInt($("input:radio[name=sit]:checked").val());
    var fail = parseInt($("input:radio[name=fail]:checked").val());
    var life = parseInt($("input:radio[name=life]:checked").val());

    var result1 = ((name1) + (name2) + (address) + (phone));
    var result2 = add(age, sit, fail, life);

   
    if (result2 = 4) {
      alert("C#");
    } else if (result2 = 3) {
      alert("JavaScript");
    } else if (result2 = 2) {
      alert("Python");
    } else if (result2 <= 1) {
      alert("Swift");
    }
    
    
    $("#output").text(result1 + result2);
  });
});

 // $(".ideal").text(address);

    // $("#output").show();

    // if (gender === 'male' && 'athletic') {
    //   output = "schwarzenegger"
    // }
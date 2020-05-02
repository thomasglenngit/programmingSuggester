$(document).ready(function() {
  $("#profile").submit(function(event) {
    event.preventDefault();
    var name1 = $("input#firstName").val();
    var name2 = $("input#lastName").val();
    var address = $("input#address").val();
    var phone = $("input#phone").val();
    var flavor = $("input:radio[name=age]:checked").val();
    var result = ((name1) + (name2) + (address) + (phone));
    

    $(".firstName").text(name1);
    $(".lastName").text(name2);
    $(".address").text(address);
    $(".phone").text(phone);
    // $(".ideal").text(address);

    // $("#output").show();

    // if (gender === 'male' && 'athletic') {
    //   output = "schwarzenegger"
    // }
    
    $("#output").text(result);
  });
});
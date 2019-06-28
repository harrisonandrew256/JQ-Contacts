$(document).ready(function() {
    $("#add-address").click(function() {

    });

    $("form#new-contact").submit(function(event) {
        event.preventDefault();

        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();

        var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses:  [] };

        $(".address").each(function() {
            var inputtedStreet = $(this).find("input.new-street").val();
            var inputtedCity = $(this).find("input.new-city").val();
            var inputtedcounrty = $(this).find("input.new-country").val();

            var newAddress = { street: inputtedStreet, city: inputtedCity, country: inputtedcounrty };
            newContact.addresses.push(newAddress);
        });

        $("ul#contacts").append("<li><span class='contact'>" +
                                newContact.firstName +
                                "</span></li>");

        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
        $("input.new-street").val("");
        $("input.new-city").val("");
        $("input.new-country").val("");

        $(".new-address").remove();

        $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);

        $("ul#addresses").text("");
        newContact.addresses.forEach(function(address) {
            $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.country + "</li>");
            });
        });
    });
});

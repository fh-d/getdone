
    // Dynamic Background
    var totalCount = 10;
    function ChangeIt() {
    var num = Math.ceil(Math.random() * totalCount);
    // Path do app img background folder
    document.body.background = 'app/img//bg/' + num + '.jpg';
    // Background repeat
    document.body.style.backgroundRepeat = "no-repeat"; 
    document.body.style.backgroundSize = "cover"; 
    }
    ChangeIt();

    // jQueryUI draggable+sortable
    $(function() {
    $("ul.droptrue").sortable({
    connectWith: "ul"
    });
    $("ul.dropfalse").sortable({
    connectWith: "ul",
    dropOnEmpty: false
    });
    $("#sortable1, #sortable2, #sortable3").disableSelection();
    });



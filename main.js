    // onBoarding fade

	$( ".info-close" ).click(function() {
	  $( ".info-wrap" ).fadeOut( "slow" );
	});

    // Dynamic Background
    var totalCount = 10;
    function ChangeIt() {
    var num = Math.ceil(Math.random() * totalCount);
    // Path do app img background folder
    document.body.background = 'app/img//bg/' + num + '.jpg';

    }
    ChangeIt();

    // localStorage data task init
    $(document).ready(function() {
    var i = 0;
    for (i = 0; i < localStorage.length; i++) {
    var taskID = "task-" + i;
    $('#taskList').append("<li id='" + taskID + "'>" + localStorage.getItem(taskID) + "</li>");
    }
    // Clear all task
    $('#clear').click(function() {
    localStorage.clear();
    location.reload();
    });
    // Creation style, localStorage sauvegarde & generation li
    $('#taskEntryForm').submit(function() {
    if ($('#taskInput').val() !== "") {
    var taskID = "task-" + i;
    var taskMessage = $('#taskInput').val();
    localStorage.setItem(taskID, taskMessage);
    $('#taskList').append("<li class='ui-state-default ui-sortable-handle' id='" + taskID + "'>" + taskMessage + "</li>");
    var task = $('#' + taskID);
    task.css('display', 'none');
    task.slideDown();
    $('#taskInput').val("");
    i++;
    }
    return false;
    });
    // Creation style
    $(document).on('click', 'li', function() {
    $(this).toggleClass('done').show("slow");
    });
    });
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




$(document).ready(function(){

$('#taskList').on('click', 'li', function(){

('taskID', $(this).addClass('strikeout done').show("slow"));
});
{
    $(this).addClass('strikeout done');
}

})

    $('#taskList').on("dblclick", "li", function (event) {

        self = $(this);
        taskID = self.attr('id');
        localStorage.removeItem(taskID);
        self.slideUp('slow', function () {
        self.remove();
        });

    });



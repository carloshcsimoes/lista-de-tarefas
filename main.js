$(document).ready(function() {
    $('#taskForm').submit(function(event) {
        event.preventDefault();
        var taskText = $('#taskInput').val().trim();
        if (taskText !== "") {
            $('#taskList').append('<li>' + taskText + '</li>');
            $('#taskInput').val("");
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('done');
    });
});

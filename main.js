$(document).ready(function() {
   
    $('#cadastrar').click(function() {
        const tarefa = $('#tarefa').val().trim();
        if (tarefa) {
            $('#lista-tarefas').append(
                `<li>${tarefa} <button class="remove">X</button></li>`
            );
            $('#tarefa').val(''); 
        } else {
            alert('Por favor, insira o nome da tarefa!');
        }
    });

   
    $(document).on('click', '.remove', function() {
        $(this).parent().remove();
    });

    $(document).on('click', '.tarefa-texto', function() {
        $(this).toggleClass('completed');
    });
});

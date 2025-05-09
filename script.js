document.addEventListener('DOMContentLoaded', function() {
    const editors = document.querySelectorAll('.code-editor');
    editors.forEach(editor => {
        CodeMirror.fromTextArea(editor, {
            lineNumbers: true,
            mode: 'htmlmixed',
            theme: 'default'
        });
    });
});
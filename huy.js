ConfirmDialog('Are you sure');

function ConfirmDialog(message) {
    $('<div></div>').appendTo('body')
                    .html('<div><h6>'+message+'?</h6></div>')
                    .dialog({
                        modal: true, title: 'Delete message', zIndex: 10000, autoOpen: true,
                        width: 'auto', resizable: false,
                        buttons: {
                            Yes: function () {
                                // $(obj).removeAttr('onclick');                                
                                // $(obj).parents('.Parent').remove();

                                $('body').append('<h1>Confirm Dialog Result: <i>Yes</i></h1>');

                                $(this).dialog("close");
                            },
                            No: function () {                                                                 
                                $('body').append('<h1>Confirm Dialog Result: <i>No</i></h1>');

                                $(this).dialog("close");
                            }
                        },
                        close: function (event, ui) {
                            $(this).remove();
                        }
                    });
};
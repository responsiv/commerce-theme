addEventListener('render', function() {

    // Auto Collapsed List
    $('ul.bullet-list li.active:first').each(function() {
        $(this).parents('ul.collapse').each(function() {
            $(this).addClass('show').prevAll('.collapse-caret:first').removeClass('collapsed');
        });
    });

    // Tooltips
    $('[data-bs-toggle="tooltip"]').each(function() {
        $(this).tooltip();
    });

    // Popovers
    $('[data-bs-toggle="popover"]').each(function() {
        var $el = $(this);
        if ($el.data('content-target')) {
            $el
                .popover({ html: true, content: $($el.data('content-target')).get(0) })
                .on('shown.bs.popover', function() {
                    $('input:first', $($el.data('content-target'))).focus();
                })
            ;
        }
        else {
            $el.popover();
        }
    });
});

// Makes the mini cart jump when an update is detected
addEventListener('ajax:update-complete', function(event) {
    const { handler } = event.detail.context;
    if (['onRemoveFromCart', 'onAddToCart'].includes(handler)) {
        var el = document.querySelector('#miniCart');
        el.classList.add('animate-shockwave');
        setTimeout(function() { el.classList.remove('animate-shockwave'); }, 1100);
    }
});

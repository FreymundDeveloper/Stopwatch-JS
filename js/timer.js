(function ($) {
    $.fn.timer = function (options) {
        const finalOptions = $.extend({
            message: 'Coming Soon!',
            hour: '23:59:59'
        }, options);

        const hourDicker = $('<span class="digit">').html('0'),
              hourUnit = $('<span class="digit">').html('0'),
              minuteDicker = $('<span class="digit">').html('0'),
              minuteUnit = $('<span class="digit">').html('0'),
              secondDicker = $('<span class="digit">').html('0'),
              secondUnit = $('<span class="digit">').html('0');

        const separatorHour = $('<span class="separator">').html(':'),
              separatorMinute = $('<span class="separator">').html(':');

        const message = $('<div class="message">').html(finalOptions.message);

        $(this).addClass('timer');
        $(this).append(
            hourDicker, hourUnit, separatorHour,
            minuteDicker, minuteUnit, separatorMinute,
            secondDicker, secondUnit, message
        );

        return this;

    }
})(jQuery);
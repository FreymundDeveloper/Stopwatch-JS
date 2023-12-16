(function ($) {
    $.fn.timer = function (options) {
        const finalOptions = $.extend({
            message: 'Coming Soon!',
            hour: '23:59:59' //Define the time end
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

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/);

        const targetTime = regex.exec(finalOptions.hour);

        let stopwatch = setInterval(() => {
            const now = new Date();
            const target = new Date();

            target.setHours(targetTime[1]);
            target.setMinutes(targetTime[2]);
            target.setSeconds(targetTime[3]);

            const timeChange = target.getTime() - now.getTime();

            if (timeChange >= 0) {
                const changed = regex.exec(new Date(timeChange).toISOString());

                hourDicker.html(changed[1][0]);
                hourUnit.html(changed[1][1]);
                minuteDicker.html(changed[2][0]);
                minuteUnit.html(changed[2][1]);
                secondDicker.html(changed[3][0]);
                secondUnit.html(changed[3][1]);
            }
            else {
                clearInterval(stopwatch);
            }

        }, 1000);

        return this;

    }
})(jQuery);
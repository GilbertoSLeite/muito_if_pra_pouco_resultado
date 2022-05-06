async function custom_checar_dia_util(params) {
    let day_week = moment().subtract(3, 'h').isoWeekday();
    let result = moment().format('DD/MM/YYYY');

    const holidays = [
        '01/01', // Confraternização Universal
        '02/04', // Paixão de Cristro
        '21/04', // Tiradentes
        '01/05', // Dia do trabalho
        '07/09', // Independência dp Brasil
        '12/10', // Nossa Senhora Aparecida
        '02/11', // Finados
        '15/11', // Proclamação da Republica
        '25/12', // Natal
    ];

    let isHoliday = holidays.includes(moment(result, 'DD/MM/YYYY', true).format('DD/MM'));

    for (let i = 0; i < 3; i++) {
        if ((day_week == 1 && isHoliday) || day_week == 1) {
            result = moment(result, 'DD/MM/YYYY').add(1, 'days').format('DD/MM/YYYY');
            isHoliday = holidays.includes(moment(result, 'DD/MM/YYYY', true).format('DD/MM'));
            day_week = moment(result, 'DD/MM/YYYY').isoWeekday();
        } else if ((day_week == 2 && isHoliday) || day_week == 2) {
            result = moment(result, 'DD/MM/YYYY').add(1, 'days').format('DD/MM/YYYY');
            isHoliday = holidays.includes(moment(result, 'DD/MM/YYYY', true).format('DD/MM'));
            day_week = moment(result, 'DD/MM/YYYY').isoWeekday();
        } else if ((day_week == 3 && isHoliday) || day_week == 3) {
            result = moment(result, 'DD/MM/YYYY').add(1, 'days').format('DD/MM/YYYY');
            isHoliday = holidays.includes(moment(result, 'DD/MM/YYYY', true).format('DD/MM'));
            day_week = moment(result, 'DD/MM/YYYY').isoWeekday();
        } else if ((day_week == 4 && isHoliday) || day_week == 4) {
            result = moment(result, 'DD/MM/YYYY').add(1, 'days').format('DD/MM/YYYY');
            isHoliday = holidays.includes(moment(result, 'DD/MM/YYYY', true).format('DD/MM'));
            day_week = moment(result, 'DD/MM/YYYY').isoWeekday();
        } else if ((day_week == 5 && isHoliday) || day_week == 5) {
            result = moment(result, 'DD/MM/YYYY').add(3, 'days').format('DD/MM/YYYY');
            isHoliday = holidays.includes(moment(result, 'DD/MM/YYYY', true).format('DD/MM'));
            day_week = moment(result, 'DD/MM/YYYY').isoWeekday();
        } else if (day_week > 6) {
            result = moment(result, 'DD/MM/YYYY').add(2, 'days').format('DD/MM/YYYY');
            isHoliday = holidays.includes(moment(result, 'DD/MM/YYYY', true).format('DD/MM'));
            day_week = moment(result, 'DD/MM/YYYY').isoWeekday();
        }
    }

    if (isHoliday && day_week < 5) {
        result = moment(result, 'DD/MM/YYYY').add(1, 'days').format('DD/MM/YYYY');
        isHoliday = holidays.includes(moment(result, 'DD/MM/YYYY', true).format('DD/MM'));
        day_week = moment(result, 'DD/MM/YYYY').isoWeekday();
    } else if (isHoliday && day_week == 5) {
        result = moment(result, 'DD/MM/YYYY').add(3, 'days').format('DD/MM/YYYY');
        isHoliday = holidays.includes(moment(result, 'DD/MM/YYYY', true).format('DD/MM'));
        day_week = moment(result, 'DD/MM/YYYY').isoWeekday();
    }

    return result;
}

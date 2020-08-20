const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = [];
for (let i = 0; i < employers.length; i++) {
  if (employers[i].length > 0 && employers[i].trim() !== '') {
    command.push(employers[i]);
  }
}
for (let i = 0; i < command.length; i++) {
  command[i] = command[i].toLowerCase().trim();
  command[i] = command[i][0].toUpperCase() + command[i].slice(1);
}

const data = {
  cash: [3, 8, 3],
  react: ['JSX', 'components', 'props', 'state', 'hooks'],
  add: ['styled-components', 'firebase'],
};

function calcCash(tot, own) {
  let total = tot || 0;
  const everyCash = own;

  for (let i = 0; i < everyCash.length; i++) {
    total += +everyCash[i];
  }
  return total;
}

const lesson = calcCash(null, data.cash);

function makeBusiness([director, teacher, allModule, gang, course]) {
  const newteacher = teacher || 'Максим';
  const sumTech = data.react.concat(data.add, 'и другие');
  console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${newteacher}. Всего уроков: ${allModule}. 
  Команда Академии: ${gang}
  Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!
  Технологии которые мы изучим: 
  ${sumTech}`);
}

makeBusiness(['Артем', null, lesson, command, nameCourse]);

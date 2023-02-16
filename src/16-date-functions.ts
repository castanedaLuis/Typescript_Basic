import { subDays, format } from 'date-fns';


const date = new Date(1998,1, 25); // Febrero 25 del 98

const rta = subDays(date,25);
const str = format(rta,'yyyy-MM-dd');

console.log(rta);
console.log(str);




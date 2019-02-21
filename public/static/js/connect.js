
import axios from 'axios'
const admin = 'https://www.hezitop.com';
const adminApi = 'https://www.hezitop.com/hz/public/index.php/api';


function ask(nav,port,resfn){
	console.log('hhh');
  axios.get(`${adminApi}/${nav}/${port}`).then(resfn)
}
console.log('123');


export {
	ask
}
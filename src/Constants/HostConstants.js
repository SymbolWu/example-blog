const MOCK = 'MOCK';
const DEVSER = 'DEVSER';
const PRDSER = 'PRDSER';

let host = '';
let env = '';
switch(process.env.Text[0]){
    case MOCK:
        host='http://mock/test/';
        env=0;
    break;
    case DEVSER:
        host='http://devser/'
        env=1;
        break;
    case PRDSER:
        host='http://prdser/'
        env=2;
        break;
    default:
        break;
}

export {host,env} 


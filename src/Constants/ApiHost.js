const MOCK = 'MOCK';
const DEVSER = 'DEVSER';
const PRDSER = 'PRDSER';

let host = '';
switch(process.env.Text[0]){
    case MOCK:
        host='http://mock/test.mock';
    break;
    case DEVSER:
        host='http://devser/'
        break;
    case PRDSER:
        host='http://prdser/'
        break;
    default:
        break;
}

export default host


import host from './ApiHost'
let mockData = () =>{
    if(process.env.Text[0]==='MOCK'){
      let Mock = require('mockjs');
      // Mock.mock(host+'personl',{
      //   'name|3':'fei',//这个定义数据的模板形式下面会介绍
      //   'age|20-30':25,
      // })
      var data = {
            result: [
                {
                  id: '024',
                  address: "贝克街221号",
                  status: "on"
                },
                {
                  id: '026',
                  address: "贝克街211号",
                  status: "off"
                }
              ]
            };
        Mock.mock(host+'wifiprobeinfo.do', data);
    }
}
export {mockData}
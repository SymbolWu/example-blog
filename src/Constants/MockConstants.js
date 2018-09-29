import {host,env} from './HostConstants'
import *as api from './ApiConstants'
let mockData = () =>{
    if(env===0){
      let Mock = require('mockjs');
      Mock.mock(host+'demo.do',{
        'name|3':'fei','age|20-30':25,
      })
      Mock.mock(api.QUERY_MENULIST_DO, {
        menuList:[{id:'0',name:'Home'},{id:'1',name:'Article'}]
      });
    }
}
export {mockData}
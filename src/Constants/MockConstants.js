import {host,env} from './HostConstants'
import *as api from './ApiConstants'
let mockData = () =>{
    if(env===0){
      //当前指令中包含Mock 的时候，引入mockjs 并生成虚拟数据
      let Mock = require('mockjs');
      //定义Mock数据
      Mock.mock(host+'demo.do',{
        'name|3':'fei','age|20-30':25,
      })
      Mock.mock(api.QUERY_MENULIST_DO, {
        menuList:[{id:'0',name:'Home'},{id:'1',name:'Article'},{id:'2',name:'Photograph'},{id:'3',name:'AboutMe'}]
      });
      Mock.mock(api.QUERY_TOP_TEN_ARTICLE_LIST_DO,{
        // "articleList":{
        //   "array|10":[{"name":'@title',"id":'@id',"publishdate":'@datetime("yyyy-MM-dd A HH:mm:ss")'}]
        // }
        "articleList|10":[{"name":'@title',"id":'@id',"publishdate":'@datetime("yyyy-MM-dd A HH:mm:ss")'}]
      })

      
    }
}
export {mockData}
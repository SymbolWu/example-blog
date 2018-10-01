import {env} from './HostConstants'
import *as api from './ApiConstants'
import {Random} from 'mockjs'
let mockData = () =>{
    if(env===0){
      //当前指令中包含Mock 的时候，引入mockjs 并生成虚拟数据
      let Mock = require('mockjs');
      //定义Mock数据
      Mock.mock(api.QUERY_MENULIST_DO, {
        menuList:[{id:'0',name:'Home'},{id:'1',name:'Article'},{id:'2',name:'Photograph'},{id:'3',name:'AboutMe'}]
      });

      Mock.mock(api.QUERY_RECENTLY_ARTICLE_LIST_DO,{
        "articleList|5":[{"name":'@title',"id":'@id',"publishdate":'@datetime("yyyy-MM-dd A HH:mm:ss")'}]
      })

      Mock.mock(api.QUERY_ALL_ARTICLE_LIST_DO,{
        "articleList|30":[{"name":'@title',"id":'@id',"publishdate":'@datetime("yyyy-MM-dd A HH:mm:ss")'}]
      })


      Mock.mock(api.QUERY_RECENTLY_ALBUM_LIST_DO,{
        "albumList|4":[{"cover":Random.image('200x200', Mock.mock('@color'), '#FFF', Mock.mock('@word(5)')),"id":'@id',"title":'@word(8)'}]
      });
      Mock.mock(api.QUERY_ALL_ALBUM_LIST_DO,{
        "albumList|8":[{"cover":Random.image('200x200', Mock.mock('@color'), '#FFF', Mock.mock('@word(5)')),"id":'@id',"title":'@word(8)'}]
      });
      
      Mock.setup({ timeout: '1000-4000' });
    }
}
export {mockData}
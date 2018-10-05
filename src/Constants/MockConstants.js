import { env } from './HostConstants'
import *as api from './ApiConstants'
import { Random } from 'mockjs'
let mockData = () => {
  if (env === 0) {
    //当前指令中包含Mock 的时候，引入mockjs 并生成虚拟数据
    let Mock = require('mockjs');
    //定义Mock数据
    Mock.mock(api.QUERY_MENULIST_DO, {
      menuList: [{ id: '0',code:0, name: 'Home',label:'Home' }, { id: '1',code:1, name: 'Article',label:'Blog' }, { id: '2',code:2, name: 'Photograph',label:'Pics' }, { id: '3',code:3, name: 'AboutMe',label:'About' }]
    });
    Mock.mock(RegExp(api.QUERY_PAGE_HEADER_DO + ".*") ,'get',{
      //@capitalize(@word(5))
      "pageHeaderContent":{id:"@id",pageName:'@capitalize(@word)',pageDescription:'@paragraph(2)'}
    });
    //article
    Mock.mock(api.QUERY_RECENTLY_ARTICLE_LIST_DO, {
      "articleList|5": [{ "name": '@title', "id": '@id', "publishdate": '@datetime("yyyy-MM-dd A HH:mm:ss")',"description":'@sentence(3, 5)'}]
    })
    Mock.mock(api.QUERY_ALL_ARTICLE_LIST_DO, {
      "articleList|30": [{ "name": '@title', "id": '@id', "publishdate": '@datetime("yyyy-MM-dd A HH:mm:ss")',"description":'@sentence(3, 5)'}]
    })
    Mock.mock(RegExp(api.QUERY_SINGEL_ARTICLE_DO + ".*"), 'get', {
      "articleBody": {
        'id': '@id',
        'title': '@title',
        'author': '@name',
        'authorAvatar': Random.image('50x50', Mock.mock('@color'), '#FFF', Mock.mock('@word(1)')),
        'publishdate': '@datetime("yyyy-MM-dd A HH:mm:ss")',
        'content': '@paragraph(10)'
      }
    })

    //photo
    Mock.mock(api.QUERY_RECENTLY_ALBUM_LIST_DO, {
      "albumList|4": [{ "cover": Random.image('1962x1320', Mock.mock('@color'), '#FFF'), "id": '@id', "title": '@capitalize(@word)',"description":'@sentence(3, 5)' }]
    });
    Mock.mock(api.QUERY_ALL_ALBUM_LIST_DO, {
      "albumList|8": [{ "cover": Random.image('1962x1320', Mock.mock('@color'), '#FFF'), "id": '@id', "title": '@capitalize(@word)',"description":'@sentence(3, 5)'}]
    });
    Mock.mock(RegExp(api.QUERY_SINGEL_ALBUM_DO + ".*"), 'get', {
      "albumBody": {
        'id': '@id',
        'albumName': '@word(10)',
        "picList|20": [{
          "picURL": Random.dataImage('100x100'),
          "id": '@id',
          "title": '@word(8)',
          "description": '@sentence',
          "publishDate": '@date',
          "publishBy": '@name'
        }],
        'buildDate':'@datetime("yyyy-MM-dd A HH:mm:ss")',
        'buildBy':'@name',
        'builderAvatar': Random.image('50x50', Mock.mock('@color'), '#FFF', Mock.mock('@word(1)')),
        "description":'@sentence(3, 5)'
      }
    });

    
    //timeout
    //Mock.setup({ timeout: '1000-4000' });
  }
}
export { mockData }
The project is a personal blog and will be a SPA.

## Main Library

- React.js
- Redux
- React-redux
- React-router-dom

## Style
- scss

## Mock Vurial Data
- mock.js

## package.json scripts comment 
```
- "start": "node scripts/start.js Mock",            //开发环境 默认运行Mock数据
- "start-Mock": "node scripts/start.js Mock",       //开发环境 运行Mock数据host
- "start-DevSer": "node scripts/start.js DevSer",   //开发环境 运行开发服务器host
- "start-PrdSer": "node scripts/start.js PrdSer",   //开发环境 运行生产服务器host

- "build": "node scripts/build.js DevSer",          //默认打包开发服务器
- "build-Mock": "node scripts/build.js Mock",       //打包数据使用Mockjs数据   用于简单的演示
- "build-DevSer": "node scripts/build.js DevSer",   //打包数据使用开发服务器   可用于UAT SIT
- "build-PrdSer": "node scripts/build.js PrdSer",   //打包数据使用生产服务器   用于正式发布
```




/*
项目 资金盘  (切勿投资！！！ 投资被骗活该

需要实名  不喜欢的不要玩)

玩法  输入身份证号就能实名 (找个同名的应该不难) 每天签到4元 自己想办法拉小号 满100提现

注册地址:
http://wap.huaren111.com/#/pages/login/register?yqm=4282190

域名: api.huaren118

重写地址: https://api.huaren118.com

目标: https://raw.githubusercontent.com/liuqi6968/-/main/hryy.js

hryy_token 手动抓取api.huaren118 中的Authorization

多账户用@隔开

export hryy_token='Authorization@Authorization'


*/


const $ = new Env('华润医药签到');
const notify = $.isNode() ? require('./sendNotify') : '';
const qs = $.isNode() ? require('qs') : '';
let status;
status = (status = ($.getval("hryy_tokenstatus") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
let hryy_tokenArr = [];
let hryy_token = $.isNode() ? (process.env.hryy_token ? process.env.hryy_token : "") : ($.getdata('hryy_token') ? $.getdata('hryy_token') : "");
let hryy_tokens = ""
let tz = ($.getval('hryy_tokentz') || '1');
//let host ='www.hesxxdsheng.com'
$.message = ''
let G = '   撸点 :据说100能提现\n'
console.log(`${G}\n`);
$.message += `${G}\n`;


 
//开始运行
!(async () => {
  if (typeof $request !== "undefined") {
    ck()
  } else {
    if (!$.isNode()) {
      hryy_tokenArr.push($.getdata('hryy_token'))
      let count = ($.getval('hryy_tokencount') || '1');
      hryy_tokenArr = hryy_token.split('@');
      for (let i = 2; i <= count; i++) {
        hryy_tokenArr.push($.getdata(`hryy_token${i}`))
      }
      if (!hryy_tokenArr[0]) {
        $.log(`\n【温馨提示】：你没有填写ck跑个嘚`)
        $.message += `\n【温馨提示】：你没有填写ck跑个锤子🔨🔨🔨🔨`
      } else {
        console.log(`-------------共${hryy_tokenArr.length}个账号-------------\n`)
      }
      for (let i = 0; i < hryy_tokenArr.length; i++) {
        if (hryy_tokenArr[i]) {
          hryy_token = hryy_tokenArr[i];
          $.index = i + 1;
          console.log(`\n开始【华润医药账户 ${$.index}】`)
          await kzjb()
        }
      }
    } else {
      if (process.env.hryy_token && process.env.hryy_token.indexOf('@') > -1) {
        hryy_tokenArr = process.env.hryy_token.split('@');
        console.log(`您选择的是用"@"隔开\n`)
      } else {
        hryy_tokens = [process.env.hryy_token]
      };
      Object.keys(hryy_tokens).forEach((item) => {
        if (hryy_tokens[item]) {
          hryy_tokenArr.push(hryy_tokens[item])
        }
      })

      if (!hryy_tokenArr[0]) {
        $.log(`\n【温馨提示】：你没有填写ck跑个嘚`)
        $.message += `\n【温馨提示】：你没有填写ck跑个锤子🔨🔨🔨🔨`
      } else {
        console.log(`-------------共${hryy_tokenArr.length}个账号-------------\n`)
      }
      for (let k = 0; k < hryy_tokenArr.length; k++) {
        hryy_token = hryy_tokenArr[k]
        $.index = k + 1;
        console.log(`\n开始【华润医药账户 ${$.index}】`)
        await kzjb()
      }
    }
  }
  message() //通知
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
 //https://api.huaren118.com/api/v1/user/index 
  function ck() {
	if ($request.url.indexOf("api") > -1&&$request.url.indexOf("v1") > -1&&$request.url.indexOf("user") > -1&&$request.url.indexOf("index") > -1) {
		let hd = $request.headers.Authorization
		ck = hd
		if (hryy_token) {
			if (hryy_tokens.indexOf(ck) == -1) {  // 找不到返回 -1
				hryy_token = hryy_token + "@" + ck;
				$.setdata(hryy_token, "hryy_token");
				ckList = hryy_token.split("@");
				$.msg($.name + ` 获取第${ckList.length}个 ck 成功: ${ck}`);
			}
		} else {
			$.setdata(ck, "hryy_token");
			$.msg($.name + ` 获取第1个 ck 成功: ${ck}`);
		}
	}
}


function kzjb(timeout = 0){
          return new Promise((resolve) => {
            let url = {
              url: `https://liuqi6968.coding.net/p/jiaobenkongzhi/d/jbkzcode/git/raw/master/code.json`,
              headers:``,
                 }
    $.get(url, async (err, resp, data) => {
              try {               
                data = JSON.parse(data);    
        if (data.jhx == 1) {
console.log('脚本状态：'+data.msgi)
           

         
 await sign()
  
    await pe()
  
  
  
        } else {        
console.log('【脚本状态】'+data.msg)
          $.message +=   '【脚本状态】'+data.msg
             
                            }             
           } catch (e) {
                $.logErr(e, resp);
              } finally {
                resolve()
              }
            }, 0)
          })
        }


//签到
function sign(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
      url: `https://api.huaren118.com/api/v1/user/sign`,
      headers:   {
    "Host": "api.huaren118.com",
    "authorization": `${hryy_token}`,
    "origin": "https://wap.huaren111.com"
  },
      body: `{}`
    }
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                 if (data.code= 0) {
       
          console.log('\n【'  +data.message +'】')
          $.message += '\n【'  +data.message +'】'      
                } else {
console.log('\n【'  +data.message +'】')
          $.message += '\n【'  +data.message +'】'      
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
function pe(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
      url: `https://api.huaren118.com/api/v1/user/index`,
      headers: {
    "Host": "api.huaren118.com",
    "authorization": `${hryy_token}`,
    "origin": "https://wap.huaren111.com"
  },
    }
        $.get(url, async (err, resp, data) => {
            try {
            
            data = JSON.parse(data)
 
  if (data.code= 0) {
           
                } else {
 console.log   ('\n【账号】:' +data.data.user_info.username)    
         console.log ('\n【体验金】:' + data.data.user_info.ex_gold)
         console.log ('\n【可提现】:' +data.data.user_info.withdraw)
          $.message +='\n【账号】:' +data.data.user_info.username
          $.message +='\n【体验金】:' +data.data.user_info.ex_gold    
   $.message +='\n【可提现】:' +data.data.user_info.withdraw
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}



//通知
async function message() {
  if (tz == 1) {
      $.msg($.name, "", $.message)
  }
  if ($.isNode()) {
      await notify.sendNotify($.name, $.message)
  }
}
//随机延迟
function RT(X, Y) {
  do rt = Math.floor(Math.random() * Y);
  while (rt < X)
  return rt;
}


function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){if(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:i,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:i,statusCode:r,headers:o,rawBody:h},s.decode(h,this.encoding))},t=>{const{message:i,response:r}=t;e(i,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let i=require("iconv-lite");this.initGotEnv(t);const{url:r,...o}=t;this.got[s](r,o).then(t=>{const{statusCode:s,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:s,statusCode:r,headers:o,rawBody:h},i.decode(h,this.encoding))},t=>{const{message:s,response:r}=t;e(s,r,r&&i.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
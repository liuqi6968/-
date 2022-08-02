/*
7.10 
软件:青碳行app
 每天1毛 提现  秒到
 注意需要开通数字人民币 介意的勿玩

 为配置自动提现 需要自己手动提现

兑换规则
1. 兑换额满0.01元即可兑换

2. 1吨碳减排量兑换8元数字人民币，1000兆卡健身精力值兑换10元数字人民币

3. 兑换前需开通央行数字人民币钱包

4. 兑换成功后数字人民币实时到账

0 6 * * * https://raw.githubusercontent.com/liuqi6968/-/main/qtx.js

 变量  qtxck   token#deviceCoding
 多账号@分割
 多账号只测试青龙 

*/
 
 

const $ = new Env("青碳行 ");
const notify = $.isNode() ? require("./sendNotify") : "";

const debug = 1; //0为关闭调试，1为打开调试,默认为0
let status;
let result = '';

status = (status = $.getval("qtxckstatus") || "1") > 1 ? `${status}` : ""; // 账号扩展字符
let qtxckArr = []; 
let qtxck = $.isNode()? process.env.qtxck? process.env.qtxck  : "" : $.getdata("qtxck")  ? $.getdata("qtxck"): "";

let qtxcks = "";

let tz = $.getval("qtxcktz") || "1";
let host = `https://yuasg.com`;
$.message = "";
let tingzhi = 0
  let G = '2022.8.2 安卓 随便玩玩 '
console.log(`${G}\n`);
$.message += `${G}\n`;
//开始运行
!(async () => {
  if (typeof $request !== "undefined") {
     jdck()
  } else {
    if (!$.isNode()) {
      qtxckArr.push($.getdata("qtxck"));
      
      let count = $.getval("qtxckcount") || "1";
            qtxckArr = qtxck.split('@')
             
      for (let i = 2; i <= count; i++) {
        qtxckArr.push($.getdata(`qtxck${i}`));
        
      }
      if (!qtxckArr[0]) {
        $.log(`\n【提示】：请填写变量qtxck 再运行\n`);
        $.message += `\n【提示】：请填写变量qtxck 再运行\n`;
      } else {
        console.log(
          `-------------共${qtxckArr.length}个账号-------------\n`
        );
      }
      for (let i = 0; i < qtxckArr.length; i++) {
        if (qtxckArr[i]) {
          qtxck = qtxckArr[i];
          
          $.index = i + 1;
          console.log(`\n开始【青碳行 账户 ${$.index}】`);
       //   $.message +=`\n【青碳行 账户 ${$.zh}】`
          await kzjb()
        }
      }
    } else {
      if (process.env.qtxck && process.env.qtxck.indexOf("@") > -1) {
        qtxckArr = process.env.qtxck.split("@");
        console.log(`您选择的是用"@"隔开\n`);
      } else {
        qtxcks = [process.env.qtxck];
      }
      Object.keys(qtxcks).forEach((item) => {
        if (qtxcks[item]) {
          qtxckArr.push(qtxcks[item]);
        }
      });
     

      if (!qtxckArr[0]) {
        $.log(`\n【提示】：请填写变量qtxck 再运行\n  `);
        $.message += `\n【提示】：请填写变量qtxck 再运行\n`;
      } else {
        console.log(
          `-------------共${qtxckArr.length}个账号-------------\n`
        );
      }
      for (let k = 0; k < qtxckArr.length; k++) {
        qtxck = qtxckArr[k];
        
        $.index = k + 1;
        console.log(`\n开始【青碳行 账户 ${$.index}】`);
      //  $.message +=`\n【青碳行 账户 ${$.zh}】`
        await kzjb()
      }
    }
  }
  message(); //通知
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done());
async function kzjb() {
token = qtxck.split('#')[0]
  dc = qtxck.split('#')[1]
  await qd();
       await $.wait(5000)
        await cy();
       await $.wait(5000)
       for (let x = 0; x < 3; x++) {
                    $.index = x + 1
                   await fx()//  
                   await $.wait(5000)
                     if(tingzhi == 1) break;
                   }
                  await $.wait(3000)
                   await synl();
        await $.wait(3000)
                   await myData();
}
//签到
function qd(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://carbon.lcago.cn/signIn/sign`,
            headers: {
    "Content-Type": "application/json; charset\u003dutf-8",
    "Content-Length": "202",
    "Host": "carbon.lcago.cn",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/3.12.0"
  },
            body:`{"token":"${token}","deviceCoding":"${dc}","language":"ZH"}`,
        }
       
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.respcod == 01) {
                
 console.log('\n【' +data.respmsg+'】')
  $.message += '\n【' +data.respmsg+'】'
            
                } else {
                
 console.log('\n【' +data.respmsg+'】')
  $.message += '\n【' +data.respmsg+'】'
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//答题
function dt(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://carbon.lcago.cn/community/requestQuestion`,
            headers: {
    "Content-Type": "application/json; charset\u003dutf-8",
    "Content-Length": "202",
    "Host": "carbon.lcago.cn",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/3.12.0"
  },
            body:`{"token":"${token}","deviceCoding":"${dc}","taskId": "EHD8472JSDS"}`,
        }
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.respcod == 01) {
                
 for (let k = 0; k < data.data.dataList.length; k++) {
 id1= data.data.dataList[k].id
                da=data.data.dataList[k].answer
       console.log('\n' +data.data.dataList[k].questionTitle)
      //  $.message += '\n' +data.data.dataList[k].questionTitle
       console.log('\n' +data.data.dataList[k].questionOptions)
       // $.message += '\n' +data.data.dataList[k].questionOptions
       
       console.log('\n 匹配答案:  ' +data.data.dataList[k].answer)
       // $.message +='\n 匹配答案:  ' +data.data.dataList[k].answer
            
                for (let b = 0; b < 1; b++) {
                await $.wait(5000)
                   await tjda()//  
  } 
                   
                   
}
                } else {
                
 console.log('\n【' +data.respmsg+'】')
  $.message += '\n【' +data.respmsg+'】'
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//参与
function cy(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://carbon.lcago.cn/community/participate`,
            headers: {
    "Content-Type": "application/json; charset\u003dutf-8",
    "Content-Length": "202",
    "Host": "carbon.lcago.cn",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/3.12.0"
  },
            body:`{"token":"${token}","deviceCoding":"${dc}",  "taskId": "EHD8472JSDS"}`,
        }
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.respcod == 01) {
                
 console.log('\n【答题' +data.respmsg+'】')
 // $.message += '\n【答题' +data.respmsg+'】'
  
  await $.wait(5000)
  await dt();
        
  
                } else {
                
 console.log('\n【' +data.respmsg+'】')
  //$.message += '\n【' +data.respmsg+'】'
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//提交答案
function tjda(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://carbon.lcago.cn/community/answerQuestion`,
            headers: {
    "Content-Type": "application/json; charset\u003dutf-8",
    "Content-Length": "202",
    "Host": "carbon.lcago.cn",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/3.12.0"
  },
            body:`{"token":"${token}","deviceCoding":"${dc}",  "questionId": ${id1},
  "answer": "${da}"}`,
        }
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.respcod == 01) {
                
 console.log('\n【' +data.respmsg+'】')
 // $.message += '\n【' +data.respmsg+'】'
                } else {
                
 console.log('\n【' +data.respmsg+'】')
  //$.message += '\n【' +data.respmsg+'】'
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}

//分享
function fx(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://carbon.lcago.cn/community/share/accomplish`,
            headers: {
    "Content-Type": "application/json; charset\u003dutf-8",
    "Content-Length": "202",
    "Host": "carbon.lcago.cn",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/3.12.0"
  },
            body:`{"token":"${token}","deviceCoding":"${dc}","taskId": "SHARE001"}`,
        }
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
// console.log(data)
                if (data.respcod == 01) {
                
 console.log('\n【' +data.respmsg+'】')
 // $.message += '\n【' +data.respmsg+'】'
 
                } else {
                
 console.log('\n【' +data.respmsg+'】')
  $.message += '\n【' +data.respmsg+'】'
 tingzhi == 1
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}


//首页能量
function synl(timeout = 0) {
  return new Promise((resolve) => {
  
  let url = {
            url: `https://carbon.lcago.cn/interact/data`,
            headers: {
    "Content-Type": "application/json; charset\u003dutf-8",
    "Content-Length": "202",
    "Host": "carbon.lcago.cn",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/3.12.0"
  },
            body: `{"token":"${token}","deviceCoding":"${dc}","language":"ZH"}`,
        }
       
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.respcod == 01) {
                zh= data.data.nickName
              //  console.log(data.data.nickName)
                for (let i = 0; i < data.data.dataList.length; i++) {
                id=data.data.dataList[i].id
                 
                for (let c = 0; c < 1; c++) {
                   await $.wait(2000)
                   await ts()//  
                
                   }
}
                } else {
               
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//首页能量收取
function ts(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://carbon.lcago.cn/interact/collect`,
            headers: {
    "Content-Type": "application/json; charset\u003dutf-8",
    "Content-Length": "202",
    "Host": "carbon.lcago.cn",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/3.12.0"
  },
            body:`{"token":"${token}","deviceCoding":"${dc}","language":"ZH","id":"${id}"}`,
        }
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.respcod == 01) {
               
 console.log('\n 收集 :' +data.data.totalCal)
  $.message +='\n 收集 :' +data.data.totalCal

                } else {
                
 console.log('\n 失败 :' +data.respmsg)
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
function myData(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://carbon.lcago.cn/myCarbonAssets/myData`,
            headers: {
    "Content-Type": "application/json; charset\u003dutf-8",
    "Content-Length": "202",
    "Host": "carbon.lcago.cn",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/3.12.0"
  },
            body:`{"token":"${token}","deviceCoding":"${dc}","language":"ZH"}`,
        }
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.respcod == 01) {
                console.log('\n 账户 :' +`${zh}`)
                           $.message +=`\n  账户 : ${zh}`
 console.log('\n 可提现 :' +data.data.exchangeAmt)
  $.message +='\n 可提现 :' +data.data.exchangeAmt
 console.log('\n 累计提现 :' +data.data.totalExchangeAmt)
  $.message +='\n 累计提现 :' +data.data.totalExchangeAmt

                } else {
                
 console.log('\n 失败 :' +data.respmsg)
 
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
    $.msg($.name, "", $.message);
  }
  if ($.isNode()) {
    await notify.sendNotify($.name, $.message);
  }
}

 
 
 
//env模块    不要动  
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
/*
7.10   优化
软件:萌推app
 签到金 满10元提现
 种水果

 
 抓取 api.mengtuiapp.com 任意一个hd里面的X-Token   填写到 mt_token 多账号@分割


https://raw.githubusercontent.com/liuqi6968/-/main/mt.js


一天运行3次
0 8,12,20 * * * https://raw.githubusercontent.com/liuqi6968/-/main/mt.js

const $ = new Env("萌推");
*/
const $ = new Env("萌推");
const notify = $.isNode() ? require("./sendNotify") : "";
const qs = $.isNode() ? require("qs") : "";
const debug = 1; //0为关闭调试，1为打开调试,默认为0
let status;
let result = '';

status = (status = $.getval("mt_tokenstatus") || "1") > 1 ? `${status}` : ""; // 账号扩展字符
let mt_tokenArr = [];
let mt_token = $.isNode()
  ? process.env.mt_token
    ? process.env.mt_token
    : ""
  : $.getdata("mt_token")
    ? $.getdata("mt_token")
    : "";
let mt_tokens = "";
let tz = $.getval("mt_tokentz") || "1";
$.message = "";
  let tingzhi = 0
  let G = '7.15 日常优化 随便玩玩 '
console.log(`${G}\n`);
$.message += `${G}\n`;
//开始运行
!(async () => {
  if (typeof $request !== "undefined") {
     mtck()
  } else {
    if (!$.isNode()) {
      mt_tokenArr.push($.getdata("mt_token"));
      let count = $.getval("mt_tokencount") || "1";
      mt_tokenArr = mt_token.split('@')
      for (let i = 2; i <= count; i++) {
        mt_tokenArr.push($.getdata(`mt_token${i}`));
      }
      if (!mt_tokenArr[0]) {
        $.log(`\n【傻吊提示】：你没有填写ck跑个嘚`);
        $.message += `\n【傻吊提示】：你没有填写ck跑个嘚`;
      } else {
        console.log(
          `-------------共${mt_tokenArr.length}个账号-------------\n`
        );
      }
      for (let i = 0; i < mt_tokenArr.length; i++) {
        if (mt_tokenArr[i]) {
          mt_token = mt_tokenArr[i];
          $.index = i + 1;
          console.log(`\n开始【萌推 账户 ${$.index}】`);
              await kzjb()
       await $.wait(3000)
        }
      }
    } else {
      if (process.env.mt_token && process.env.mt_token.indexOf("@") > -1) {
        mt_tokenArr = process.env.mt_token.split("@");
        console.log(`您选择的是用"@"隔开\n`);
      } else {
        mt_tokens = [process.env.mt_token];
      }
      Object.keys(mt_tokens).forEach((item) => {
        if (mt_tokens[item]) {
          mt_tokenArr.push(mt_tokens[item]);
        }
      });

      if (!mt_tokenArr[0]) {
        $.log(`\n【傻吊提示】：你没有填写ck跑个嘚`);
        $.message += `\n【傻吊提示】：你没有填写ck跑个嘚`;
      } else {
        console.log(
          `-------------共${mt_tokenArr.length}个账号-------------\n`
        );
      }
      for (let k = 0; k < mt_tokenArr.length; k++) {
        mt_token = mt_tokenArr[k];
        $.index = k + 1;
        console.log(`\n开始【萌推 账户 ${$.index}】`);
      await kzjb()
       await $.wait(3000)
       
    
      }
    }
  }
  message(); //通知
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done());

async function kzjb() {
  await grxx()
  await $.wait(3000)
       await qd()
       await $.wait(3000)
            await zh()
       await $.wait(3000)
       await list()
       await $.wait(3000) 
       await water()
       await $.wait(3000)
}
//个人信息
function grxx(timeout = 0) {
  return new Promise((resolve) => {   
    let url = {
      url: `https://api.mengtuiapp.com/v1/act/garden/index?init=true`,
      headers: {
    "Host": "api.mengtuiapp.com",
    "Content-Length": "36",
    "X-Token": `${mt_token}`,
    "Content-Type": "application/json; charset\u003dUTF-8"
  },
     
    };
    
    $.get(
      url,
      async (err, resp, data) => {
        try {
          data = JSON.parse(data);

          if (data.code == 0) {
           
            console.log("\n【账户】:" + data.data.garden.user_name);
            
            console.log("\n【果园水果】:" + data.data.garden.tree_name);
            $.message +="\n【账户】:" + data.data.garden.user_name
              $.message +="\n【果园水果】:" + data.data.garden.tree_name
            
          } else {
          console.log("\n【" + data.message +'】');
            
            
            $.message +='\n【' + data.message +'】'
            
          }
        } catch (e) {
        } finally {
          resolve();
        }
      },
      timeout
    );
  });
}

//签到
function qd(timeout = 0) {
  return new Promise((resolve) => {
  
    
    let url = {
      url: `https://api.mengtuiapp.com/v1/arena/check_in/do`,
      headers: {
    "Host": "api.mengtuiapp.com",
    "Content-Length": "36",
    "X-Token": `${mt_token}`,
    "Content-Type": "application/json; charset\u003dUTF-8"
  },
      body: `{"ad_popup":1,"noneSignModal":false}`
    };
    
    $.post(
      url,
      async (err, resp, data) => {
        try {
          data = JSON.parse(data);
console.log(data)
          if (data.code == 0) {
            
            console.log("\n【" + data.data.notice +'】');
            
            $.message +='\n【' + data.data.notice +'】'
            await fortune()
        
          } else {
        
            
          }
        } catch (e) {
        } finally {
          resolve();
        }
      },
      timeout
    );
  });
}
//抽签
function fortune(timeout = 0) {
  return new Promise((resolve) => {   
    let url = {
      url: `https://api.mengtuiapp.com/v1/arena/check_in/fortune`,
      headers: {
    "Host": "api.mengtuiapp.com",
    "Content-Length": "36",
    "X-Token": `${mt_token}`,
    "Content-Type": "application/json; charset\u003dUTF-8"
  },
      body: `{}`
    };
    
    $.post(
      url,
      async (err, resp, data) => {
        try {
          data = JSON.parse(data);

          if (data.code == 0) {
            
            console.log("\n抽签获得【" + data.data.coupon.name +'】');
            
            
            $.message +="\n抽签获得【" + data.data.coupon.name +'】'
            
            
          } else {
          
          }
        } catch (e) {
        } finally {
          resolve();
        }
      },
      timeout
    );
  });
}
//账户
function zh(timeout = 0) {
  return new Promise((resolve) => {   
    let url = {
      url: `https://api.mengtuiapp.com/v2/home/rubik?size=20&version=1619753913224`,
      headers: {
    "Host": "api.mengtuiapp.com",
    "Content-Length": "36",
    "X-Token": `${mt_token}`,
    "Content-Type": "application/json; charset\u003dUTF-8"
  },
     
    };
    
    $.get(
      url,
      async (err, resp, data) => {
        try {
          data = JSON.parse(data);

          if (data.code == 0) {
            
            console.log("\n【签到金】" + data.data.data.items[0].data.user.amount_text);
            
            
            $.message +="\n【签到金】" + data.data.data.items[0].data.user.amount_text
            
            
          } else {
          
            
          }
        } catch (e) {
        } finally {
          resolve();
        }
      },
      timeout
    );
  });
}

//===========果园区=================

//果园任务列表
function list(timeout = 0) {
  return new Promise((resolve) => {
  
    
    let url = {
      url: `https://api.mengtuiapp.com/v1/act/garden/mission/list`,
      headers: {
    "Host": "api.mengtuiapp.com",
    "Content-Length": "36",
    "X-Token": `${mt_token}`,
    "Content-Type": "application/json; charset\u003dUTF-8"
  },
      
    };
    
    $.get(
      url,
      async (err, resp, data) => {
        try {
          data = JSON.parse(data);

          if (data.code == 0) {
            for (let i = 0; i < data.data.list.length; i++) {
            id = data.data.list[i].id
             for (let c = 0; c < 1; c++) {
          if (data.data.list[i].status == 3) {
          }else{
                    
                    console.log("\n去执行【" + data.data.list[i].title +'】');
            $.message +='\n去执行【' + data.data.list[i].title +'】'
            
                    await info()//  
                    await $.wait(3000)
                    }
                    
                    }
                    }
          } else {
          console.log("\n【" + data.message +'】');
            
            
            $.message +='\n【' + data.message +'】'
            
          }
        } catch (e) {
        } finally {
          resolve();
        }
      },
      timeout
    );
  });
}
//执行任务
function info(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `https://api.mengtuiapp.com/v1/act/garden/mission/info?namespace=garden_2021&mission_id=${id}`,
      headers: {
    "Host": "api.mengtuiapp.com",
    "Content-Length": "36",
    "X-Token": `${mt_token}`,
    "Content-Type": "application/json; charset\u003dUTF-8"
  }
    };
    
    $.get(
      url,
      async (err, resp, data) => {
        try {
          data = JSON.parse(data);

          if (data.code == 0) {
            name = data.data.name
            let DD = RT(15000, 20000)
                   console.log(`随机延迟${DD/1000}秒`);
                   await $.wait(DD)
                    await activate()//  
                    
          } else {
          
            
          }
        } catch (e) {
        } finally {
          resolve();
        }
      },
      timeout
    );
  });
}
//确认任务
function activate(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `https://api.mengtuiapp.com/v1/act/garden/mission/activate`,
      headers: {
    "Host": "api.mengtuiapp.com",
    "Content-Length": "36",
    "X-Token": `${mt_token}`,
    "Content-Type": "application/json; charset\u003dUTF-8"
  },
      body: `{"namespace":"garden_2021","mission_id":${id}}`
    };
    
    $.post(
      url,
      async (err, resp, data) => {
        try {
          data = JSON.parse(data);

          if (data.code == 0) {
           
            await mission()
            
          } else {
          
            
          }
        } catch (e) {
        } finally {
          resolve();
        }
      },
      timeout
    );
  });
}

//领取奖励
function mission(timeout = 0) {
  return new Promise((resolve) => {
    let url = {
      url: `https://api.mengtuiapp.com/v1/act/garden/mission`,
      headers: {
    "Host": "api.mengtuiapp.com",
    "Content-Length": "36",
    "X-Token": `${mt_token}`,
    "Content-Type": "application/json; charset\u003dUTF-8"
  },
      body: `{"id":${id},"mission_name":"${name}"}`
    };
    
    $.post(
      url,
      async (err, resp, data) => {
        try {
          data = JSON.parse(data);

          if (data.code == 0) {
            
            console.log("\n【获得水滴💧】:" + data.data.quantity);
            
            
            $.message +="\n【获得水滴💧】:" + data.data.quantity
            
            
          } else {
          console.log("\n【" + data.message +'】');
            
            
            $.message +='\n【' + data.message +'】'
            
          }
        } catch (e) {
        } finally {
          resolve();
        }
      },
      timeout
    );
  });
}
//浇水
function water(timeout = 0) {
  return new Promise((resolve) => {
  
    
    let url = {
      url: `https://api.mengtuiapp.com/v1/act/garden/trees/water`,
      headers: {
    "Host": "api.mengtuiapp.com",
    "Content-Length": "36",
    "X-Token": `${mt_token}`,
    "Content-Type": "application/json; charset\u003dUTF-8"
  },
      body: `{}`
    };
    
    $.post(
      url,
      async (err, resp, data) => {
        try {
          data = JSON.parse(data);

          if (data.code == 0) {
            
            console.log("\n【总水滴💧】" + data.data.water);
            $.message +="\n【总水滴💧】" + data.data.water
            
 if(data.data.water >= 10) {
           console.log(`当前💧大于10g，开始浇水`)
           $.message +=`\n当前💧大于10g，开始浇水 请稍后。。。`
           for (let i = 0; i < Math.floor(data.data.water/10); i++) {
                    $.index = i + 1
 console.log(`\n【开始第${i + 1}次执行浇水!】\n等待5秒开始下一次浇水`)
 
           await $.wait(5000)
           await js()
           if(tingzhi == 1) break;
           }
       } else {
           console.log(`水滴💧不足10g`)
           $.message +=`水滴💧不足10g`
       }
            
          } else {
          console.log("\n【" + data.message +'】');
            
            
            $.message +='\n【' + data.message +'】'
            
          }
        } catch (e) {
        } finally {
          resolve();
        }
      },
      timeout
    );
  });
}
//浇水
function js(timeout = 0) {
  return new Promise((resolve) => {
  
    
    let url = {
      url: `https://api.mengtuiapp.com/v1/act/garden/trees/water`,
      headers: {
    "Host": "api.mengtuiapp.com",
    "Content-Length": "36",
    "X-Token": `${mt_token}`,
    "Content-Type": "application/json; charset\u003dUTF-8"
  },
      body: `{}`
    };
    
    $.post(
      url,
      async (err, resp, data) => {
        try {
          data = JSON.parse(data);

          if (data.code == 0) {
            
            
          } else {
          console.log("\n【" + data.message +'】');
        $.message +='\n【' + data.message +'】'
            tingzhi == 1
          }
        } catch (e) {
        } finally {
          resolve();
        }
      },
      timeout
    );
  });
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
//随机延迟
function RT(X, Y) {
  do rt = Math.floor(Math.random() * Y);
  while (rt < X)
  return rt;
}
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
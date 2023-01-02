/*
软件: 喜马拉雅F,M
只有一个签到    
签到七天➕一天会员
重写:http://hybrid.ximalaya.com/web-activity/signIn/actionWithRecords
对应目标: https://raw.githubusercontent.com/liuqi6968/-/main/xmly.js
多账号@分割  export xmlyhd='账号1@账号2'
手动抓包  整段cookie
增加会员到期时间
*/


const $ = new Env('喜马拉雅');
const notify = $.isNode() ? require('./sendNotify') : '';
let status;
status = (status = ($.getval("xmlystatus") || "1")) > 1 ? `${status}` : ""; 
const xmlyhdArr = [],  xmlycount = ''
let xmlyhd = $.getdata('xmlyhd')
$.message = '' 
let G = '2023.01.02  喜马拉雅 随便玩玩 '
console.log(`${G}\n`);
$.message += `${G}\n`;
let tz = ($.getval('tz') || '1');
let time = Math.round( Date.now())
!(async () => {
    if (typeof $request !== "undefined") {
        xmlyck()
    } else {
    if (!$.isNode()) {
        xmlyhdArr.push($.getdata('xmlyhd'))
        let xmlycount = ($.getval('xmlycount') || '1');
        for (let i = 2; i <= xmlycount; i++) {
            xmlyhdArr.push($.getdata(`xmlyhd${i}`))
        }
 if (!xmlyhdArr[0]) {
        $.log(`\n【温馨提示】：请打喜马拉雅F.M签到获取CK`)
        $.message += `\n【温馨提示】：请打喜马拉雅F.M签到获取CK`
          } else { console.log(
            `\n\n=============================================== 脚本执行 - 北京时间(UTC+8)：${new Date(
                new Date().getTime() +
                new Date().getTimezoneOffset() * 60 * 1000 +
                8 * 60 * 60 * 1000
            ).toLocaleString()} ===============================================\n`);
        for (let i = 0; i < xmlyhdArr.length; i++) {
            if (xmlyhdArr[i]) {
                xmlyhd = xmlyhdArr[i];
                $.index = i + 1;
                console.log(`\n\n开始【喜马拉雅${$.index}】`)
                    await kzjb() 
                    await $.wait(1000)
                    message()
}
}
}}else {
            if (process.env.xmlyhd && process.env.xmlyhd.indexOf('@') > -1) {
                xmlyhdArr = process.env.xmlyhd.split('@');
                console.log(`您选择的是用"@"隔开\n`)
            } else {
                xmlyhds = [process.env.xmlyhd]
            };
            Object.keys(xmlyhds).forEach((item) => {
                if (xmlyhds[item]) {
                    xmlyhdArr.push(xmlyhds[item])
                }
            })
             if (!xmlyhdArr[0]) {
        $.log(`\n【温馨提示】：请打喜马拉雅F.M签到获取CK`)
        $.message += `\n【温馨提示】：请打喜马拉雅F.M签到获取CK`
           } else {  console.log(`共${xmlyhdArr.length}个cookie`)
            for (let k = 0; k < xmlyhdArr.length; k++) {
                $.message = ""
                xmlyhd = xmlyhdArr[k]
                $.index = k + 1;
                console.log(`\n开始【喜马拉雅F.M${$.index}】`)
                    
                  await kzjb()//你要执行的版块  
                    await $.wait(1000) 
                message()
            }
}

}}
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())
 //http://hybrid.ximalaya.com/web-activity/signIn/actionWithRecords?aid=8
//获取ck
function xmlyck() {
    if ($request.url.indexOf("actionWithRecords") > -1) {
        const xmlyhd = JSON.stringify($request.headers.Cookie)
        if (xmlyhd) $.setdata(xmlyhd, `xmlyhd${status}`)
        $.log(xmlyhd)
        $.msg($.name, "", `喜马拉雅${status}获取ck成功`)
}} 
async function kzjb() {
                await qd()//签到
                await $.wait(1000)
                await page()
                await $.wait(1000)
                await yl()//语录
                await $.wait(1000)
}
  //语录
function yl(timeout = 0) {
  return new Promise((resolve) => {
      let url = {
          url: `https://api.oick.cn/dutang/api.php`,
          headers: {
              'Accept': 'application/json',
              'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
          },
      }
      $.get(url, async (err, resp, data) => {
          try {
              result = data
              if (result.length != 0) {
                  $.log(`\n【毒鸡汤】：${result}`)
                  $.message += `\n【毒鸡汤】：${result}`
              }
          } catch (e) {
              $.logErr(e, resp);
          } finally {
              resolve()
          }
      }, timeout)
  })
}
//签到
function qd(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `http://hybrid.ximalaya.com/web-activity/signIn/actionWithRecords?aid=8`,
            headers: {
    "Cookie": `${xmlyhd}`,
    "Host": "hybrid.ximalaya.com",
  },
            body: `aid=8`,
        }
        $.post(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                if (data.data.status == 0) {
 console.log('\n【喜马拉雅F.M用户】: '+data.context.currentUser.nickname)
 console.log('\n【签到成功】: '+data.data.msg)
console.log('\n【获得积分】: '+data.data.desc)
$.message +=  '\n【喜马拉雅F.M用户】: '+data.context.currentUser.nickname
$.message +=  '\n【签到成功】: '+data.data.msg
$.message +=  '\n【获得积分】: '+data.data.desc
                } else {
                console.log('\n【喜马拉雅F.M 用户】: '+data.context.currentUser.nickname)
 console.log('\n【您今天已经签到了】: '+data.data.msg)
 $.message +=  '\n【喜马拉雅F.M用户】: '+data.context.currentUser.nickname
        $.message += '\n【您今天已经签到了】: '+data.data.msg
                }
            } catch (e) {
            } finally {
                resolve()
            }
        }, timeout)
    })
}
function page(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `https://m.ximalaya.com/business-vip-presale-mobile-web/page/ts-${time}?version=9.0.93`,
            headers: {
    "Cookie": `${xmlyhd}`,
    "Host": "m.ximalaya.com",
  }
        }
        $.get(url, async (err, resp, data) => {
            try {
                data = JSON.parse(data)
                if (data.ret == 0) {
 console.log('\n【会员】: '+data.data.modules[0].userInfo.subtitle)
$.message +=  '\n【会员】: '+data.data.modules[0].userInfo.subtitle
                } else {
             
                }
            } catch (e) {
            } finally {
                resolve()
            }
        }, timeout)
    })
}





async function message() {
  if (tz == 1) {
      $.msg($.name, "", $.message)
  }
  if ($.isNode()) {
      await notify.sendNotify($.name, $.message)
  }
}
//env模块    不要动  
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
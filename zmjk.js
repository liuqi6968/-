/*
感谢默默无闻大佬解密  

姿美健康app

数据抓取jk-agw-m.simeitol.com 中myjk-token
变量: mzjk_token多账号@分割


*/

const $ = new Env("姿美健康");
const CryptoJS = require("crypto-js")
const t = randomString(16)
const notify = $.isNode() ? require("./sendNotify") : "";
//const qs = $.isNode() ? require("qs") : "";
var timestamp = Math.round(new Date().getTime()).toString();
const debug = 0; //0为关闭调试，1为打开调试,默认为0
let status;
let result = '';

status = (status = $.getval("zmjk_tokenstatus") || "1") > 1 ? `${status}` : ""; // 账号扩展字符
let zmjk_tokenArr = [];
let zmjk_token = $.isNode()
  ? process.env.zmjk_token
    ? process.env.zmjk_token
    : ""
  : $.getdata("zmjk_token")
    ? $.getdata("zmjk_token")
    : "";

let zmjk_tokens = "";
let tz = $.getval("zmjk_tokentz") || "1";
let time = Math.round( Date.now()).toString()
$.message = "";
let G = `  2022.12.15  Y`
console.log(`${G}\n`);
$.message += `${G}\n`;
 var key = CryptoJS.enc.Utf8.parse("fd0d7f7aefcefb2598d265187863c49e");

var iv = CryptoJS.enc.Utf8.parse(t);

function AES_Encrypt(word) {
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}
 //开始运行
!(async () => {
  if (typeof $request !== "undefined") {
     ck()
  } else {
    if (!$.isNode()) {
      zmjk_tokenArr.push($.getdata("zmjk_token"));
     
      let count = $.getval("zmjk_tokencount") || "1";
      zmjk_tokenArr = zmjk_token.split('@');
      for (let i = 2; i <= count; i++) {
        zmjk_tokenArr.push($.getdata(`zmjk_token${i}`));
        
      }
      if (!zmjk_tokenArr[0]) {
        $.log(`\n【傻吊提示】：你没有填写ck跑个嘚`);
        $.message += `\n【傻吊提示】：你没有填写ck跑个嘚`;
      } else {
        console.log(
          `-------------共${zmjk_tokenArr.length}个账号-------------\n`
        );
      }
      for (let i = 0; i < zmjk_tokenArr.length; i++) {
        if (zmjk_tokenArr[i]) {
        
          zmjk_token = zmjk_tokenArr[i];
          $.index = i + 1;
          console.log(`\n开始【姿美健康 账户 ${$.index}】`);
         
          await kzjb()
          
     
     
    
        }
      }
    } else {
      if (process.env.zmjk_token && process.env.zmjk_token.indexOf("@") > -1) {
        zmjk_tokenArr = process.env.zmjk_token.split("@");
        console.log(`您选择的是用"@"隔开\n`);
      } else {
        zmjk_tokens = [process.env.zmjk_token];
      }
      Object.keys(zmjk_tokens).forEach((item) => {
        if (zmjk_tokens[item]) {
          zmjk_tokenArr.push(zmjk_tokens[item]);
        }
      });
    
      if (!zmjk_tokenArr[0]) {
        $.log(`\n【傻吊提示】：你没有填写ck跑个嘚`);
        $.message += `\n【傻吊提示】：你没有填写ck跑个嘚`;
      } else {
        console.log(
          `-------------共${zmjk_tokenArr.length}个账号-------------\n`
        );
      }
      for (let k = 0; k < zmjk_tokenArr.length; k++) {
      
        zmjk_token = zmjk_tokenArr[k];
        $.index = k + 1;
        console.log(`\n开始【姿美健康 账户 ${$.index}】`);
    
       await kzjb();
         
        
     
      }
    }
  }
  message(); //通知
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done());
 
async function kzjb() {
  await my();      
for(let c=0; c<3; c++) {
//console.log(data.data.taskVo[i].taskName)
   await dk(c);//三餐打卡
    await $.wait(3000) 
    }
 
await rw();
  await zh();
}
//账户
async function my(timeout = 0) {
    return new Promise(async(resolve) => {
 
        let url = {
            url: `https://jk-agw-m.simeitol.com/api/account/myjkUserAccount/myPage`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    "myjk-token": `${zmjk_token}`,
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
  },
  
        }
      
        $.get(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【用户】: '+data.data.nickName )
$.message +='\n【用户】: '+data.data.nickName
console.log('\n【手机号】: '+data.data.phone)
$.message +='\n【手机号】: '+data.data.phone
                } else {
                
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
async function zh(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-h.simeitol.com/api/activity/myjkPlant/fertiliWaterHome`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    "myjk-token": `${zmjk_token}`,
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
  },
        }
       
        $.get(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【麦穗】: '+data.data.userWheat )
$.message +='\n【麦穗】: '+data.data.userWheat
//console.log('\n【能量】: '+data.data.power )
//$.message +='\n【能量】: '+data.data.power
console.log('\n【成熟度】: '+data.data.progress )
$.message +='\n【成熟度】: '+data.data.progress

if(data.data.progress >= '100%') {
console.log(`\n麦子成熟 去收割`)
await sg()//收割
}else{
}

if(data.data.power >= 30) {
           for (let i = 0; i < Math.floor(data.data.power/30); i++) {
                    $.index = i + 1
 console.log(`\n【开始第${i + 1}次执行施法!】\n等待63秒开始下一次施法`)
           await js()
           await $.wait(63000)
           
           }}
                } else {
                
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//任务列表
async function rw(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-h.simeitol.com/api/activity/myjkAppTask/homePage`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    "myjk-token": `${zmjk_token}`,
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
  },
            
        }
       
        $.get(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
                if (data.code == 0) {
          
              /*for (let i = 0; i < data.data.taskVo.length; i++) {
          
                if(i==3) break
 if (data.data.taskVo[i].finishStatus == 0) {
 for(let c=0; c<3; c++) {
console.log(data.data.taskVo[i].taskName)
   await dk(c);//三餐打卡
    await $.wait(3000) 
   
 }}}*/
  if (data.data.taskVo[3].finishStatus == 0) {
  console.log(data.data.taskVo[3].taskName)
  await yddk();  //运动打卡
 } else {
         }
 if (data.data.taskVo[4].finishStatus == 0) {
  console.log(data.data.taskVo[4].taskName)
  await dt();//答题
 }
 if (data.data.taskVo[5].finishStatus == 0) {
  console.log(data.data.taskVo[5].taskName)
  await dzlb();//点赞列表
 }
 if (data.data.taskVo[6].finishStatus == 0) {
  console.log(data.data.taskVo[6].taskName)
  await ft();//发帖
 }
 if (data.data.taskVo[7].finishStatus == 0) {
  console.log(data.data.taskVo[7].taskName)
  await pltz();//评论
  
 }
if (data.data.taskVo[8].finishStatus == 0) {
  console.log(data.data.taskVo[8].taskName)
  await zf();//转发
 }
 if (data.data.taskVo[9].finishStatus == 0) {
  console.log(data.data.taskVo[9].taskName)
  await fx();//分享
 }
 if (data.data.taskVo[10].finishStatus == 0) {
  console.log(data.data.taskVo[10].taskName)
  await jltz();//体重
 }
 for (let f = 0; f < data.data.powerVos.length; f++) {
amount = data.data.powerVos[f].amount
 flowId = data.data.powerVos[f].flowId
 for (let k = 0; k < 1; k++) {   
 console.log(data.data.powerVos[f].changeTypeDesc)
   await sqnl();//收取能量
    await $.wait(1000) 
 }}
 for (let i = 0; i < data.data.taskVo.length; i++) {
                
 if (data.data.taskVo[i].finishStatus == 1) {
 console.log(data.data.taskVo[i].taskName+ '   已完成')
 }}
                } else {
                
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//打卡
async function dk(c,timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-m.simeitol.com/api/health/myjkUserdataUserDietRecord/insertUserDietRecord`,
            headers: {
    "use_token": "true",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Connection": "keep-alive",
    "User-Agent": "Android",
    "myjk-pt": "app_zmjk",
    "Channel": "4",
    "Version": "1.5.1.0",
    "Source": "6",
    "myjk-token": `${zmjk_token}`,
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
    "Content-Type": "application/json; charset\u003dutf-8",
    "Content-Length": "325",
    "Host": "jk-agw-m.simeitol.com",
    "Accept-Encoding": "gzip"
  },
     body: `{"totalCalories":751.0,"inputType":0,"dietType":${c},"inputDate":"2022-07-22","images":[],"userDietDetailReq":[{"foodId":"93910","foodNumber":100.0,"ingestionHeat":112,"unitId":"18"},{"foodId":"93911","foodNumber":100.0,"ingestionHeat":338,"unitId":"18"},{"foodId":"93913","foodNumber":100.0,"ingestionHeat":301,"unitId":"18"}]}`     
        }
    
       
        $.post(url, async (err, resp, data) => {
            try {

                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【三餐打卡】: '+data.message )
//$.message +='\n '+datamessage

                } else {
                
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//运动打卡
async function yddk(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-m.simeitol.com/api/health/myjkUserdataUserSportRecord/insertSportRecord`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
    "myjk-token": `${zmjk_token}`,
  },
     body: `{"totalCalories":309.0,"inputType":0,"inputDate":" ${nyr()}","userSportDetailReq":[{"sportDuratio":25,"sportHeat":66,"sportId":"242"},{"sportDuratio":25,"sportHeat":66,"sportId":"243"},{"sportDuratio":25,"sportHeat":57,"sportId":"669"},{"sportDuratio":30,"sportHeat":120,"sportId":"671"}]}`     
        }
       
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【运动打卡】: '+data.message )
//$.message +='\n【运动打卡】: '+datamessage

                } else {
                
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//答题
async function dt(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-m.simeitol.com/api/content/myjkQuestion/dayQuestion`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    "myjk-token": `${zmjk_token}`,
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
  }
        }
       
        $.get(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【问答】 : '+data.data.queContent )
//$.message +='\n 【问答】 : '+data.data.queContent

id = data.data.id
    await $.wait(3000) 
    await dttj();
   await $.wait(3000) 
    await dttj1();
                } else {
                
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//答题提交
async function dttj(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-m.simeitol.com/api/content/questionAnswer/save`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    "myjk-token": `${zmjk_token}`,
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
  },
  body : `{"queId":"${id}","answer":"0"}`
        }
      
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【答题】: '+data.message )
//$.message +='\n答题   '+datamessage

                } else {
                
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
async function dttj1(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-m.simeitol.com/api/content/questionAnswer/save`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    "myjk-token": `${zmjk_token}`,
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
  },
  body : `{"queId":"${id}","answer":"1"}`
        }
      
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【答题】: '+data.message )
//$.message +='\n答题   '+datamessage

                } else {
                
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//点赞列表
async function dzlb(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-m.simeitol.com/api/content/note/queryDynamicList?isGood=0&pageNo=1&pageSize=10`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
    "myjk-token": `${zmjk_token}`,
  }
        }
        $.get(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
                zfid= data.data.records[1].id
                plid= data.data.records[0].id
for (let i = 0; i < data.data.records.length; i++) {
                if(i==3) break
dzid= data.data.records[i].id
appUserid = data.data.records[i].appUserid

 for (let c = 0; c < 1; c++) {
                    $.index = c + 1
                    console.log(`\n去点赞`);
 await $.wait(3000) 
    await dz();
   // await $.wait(3000) 
 //  await qxdz();
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
//点赞
async function dz(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-m.simeitol.com/api/content/note/setNoteLike`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
    "myjk-token": `${zmjk_token}`,
  },
  body : `{"appUserid":"${appUserid}","id":${dzid},"likeSrc":"ANDROID","dataSrc":"ANDROID","isLike":"1"}`
        }
      
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【点赞】: '+data.message )
//$.message +='\n【点赞】: '+data.message

                } else {
                
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//取消点赞
async function qxdz(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-m.simeitol.com/api/content/note/setNoteLike`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
    "myjk-token": `${zmjk_token}`,
  },
  body : `{"appUserid":"${appUserid}","id":${dzid},"likeSrc":"ANDROID","dataSrc":"ANDROID","isLike":"0"}`
        }
       
      
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【点赞】: '+data.message )
//$.message +='\n【点赞】: '+data.message

                } else {
                
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//发帖
async function ft(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-m.simeitol.com/api/content/note/saveNoteInfo`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
    "myjk-token": `${zmjk_token}`,
  },
  body : `{"topicId":"","isParsePosition":1,"topicName":"","isHealthDaily":0,"mediaType":"text","position":"37.26413,115.636217","content":"打卡"}`
        }
       
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【发帖】: '+data.message )
//$.message +='\n【发帖】: '+data.message
ftid = data.data.noteId
await $.wait(3000) 
    await scft();
                } else {
                
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//删除发帖
async function scft(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-m.simeitol.com/api/content/note/setNoteLike`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    "myjk-token": `${zmjk_token}`,
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
  },
  body : `{"id":"${ftid}"}`
        }
       
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【删除发帖】: '+data.message )
//$.message +='\n【删除发帖】: '+data.message

                } else {
                
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//评论
async function pltz(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-m.simeitol.com/api/content/comment/save`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    "myjk-token": `${zmjk_token}`,
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
  },
  body : `{"referenceUserId":"${appUserid}","authorUserid":"${appUserid}","contentId":"${plid}","channelType":"ANDROID","pid":"0","mediaType":"image","type":"0","content":"打卡"}`
        }
     
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【评论】: '+data.message )
//$.message +='\n【评论】: '+data.message
scplid = data.data.commentId
await $.wait(3000) 
    await scpl();
                } else {
                
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//删除评论
async function scpl(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-m.simeitol.com/api/content/note/setNoteLike`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    "myjk-token": `${zmjk_token}`,
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
  },
  body : `{"commentId":"${scplid}","noteId":"${plid}"}`
        }
       
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【删除评论】: '+data.message )
//$.message +='\n【删除评论】: '+data.message

                } else {
                
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//转发
async function zf(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-m.simeitol.com/api/content/note/noteShare`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    "myjk-token": `${zmjk_token}`,
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
  },
  body : `{"id":"${zfid}","dataSrc":"ANDROID"}`
        }
       
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【转发帖子】: '+data.message )
//$.message +='\n【转发帖子】: '+data.message

                } else {
                
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//分享麦田
async function fx(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-m.simeitol.com/api/activity/myjkAppUserShare/share?relationName=%E7%A7%8D%E6%A4%8D%E6%97%B6%E5%88%86%E4%BA%AB&shareGoal=1&shareType=3`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
    "myjk-token": `${zmjk_token}`,
  }
      }
       
        $.get(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【转发麦田】: '+data.message )
//$.message +='\n【转发麦田】: '+data.message

                } else {
                
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//记录体重
async function jltz(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-m.simeitol.com/api/health/myjkUserdataUserWeightRecord/weightAbnormalJudge`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
    "myjk-token": `${zmjk_token}`,
  },
  body : `{"weight":"65","inputType":0}`
      }
     
        $.post(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【记录体重】: '+data.message )
//$.message +='\n【记录体重】: '+data.message

                } else {
                
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//收取能量
async function sqnl(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-h.simeitol.com/api/activity/myjkAppTask/chargePower?amount=${amount}&flowId=${flowId}`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
    "myjk-token": `${zmjk_token}`,
  }
  }
        $.get(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【能量收取】: '+data.message )
//$.message +='\n【能量收取】: '+data.message
                } else {
                
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//浇水
async function js(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-h.simeitol.com/api/activity/myjkPlant/fertiliWaterSuccess?fertilization=0&watering=1`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
    "myjk-token": `${zmjk_token}`,
  },
  
        }
      
        $.get(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【施法】: '+data.message )
//$.message +='\n【施法】: '+data.message
 
                } else {
                console.log('\n【施法】: '+data.message )
$.message +='\n【施法】: '+data.message
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//收割
async function sg(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-h.simeitol.com/api/activity/myjkPlant/harvest`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
    "myjk-token": `${zmjk_token}`,
  },
  
        }
      
        $.get(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【收割】: '+data.message )
//$.message +='\n【收割】: '+data.message
 await $.wait(3000) 
    await kk();
                } else {
                console.log('\n【收割】: '+data.message )
$.message +='\n【收割】: '+data.message
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//开垦
async function kk(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-h.simeitol.com/api/activity/myjkPlant/reclamationSuccess`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    "myjk-token": `${zmjk_token}`,
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
  },
  
        }
      
        $.get(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【开垦】: '+data.message )
//$.message +='\n【收割】: '+data.message
 await $.wait(3000) 
    await bz();
                } else {
                console.log('\n【开垦】: '+data.message )
$.message +='\n【开垦】: '+data.message
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//播种
async function bz(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-h.simeitol.com/api/activity/myjkPlant/seedingSuccess`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    "myjk-token": `${zmjk_token}`,
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
  },
  
        }
      
        $.get(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
console.log('\n【播种】: '+data.message )
//$.message +='\n【施法】: '+data.message
 
                } else {
                console.log('\n【播种】: '+data.message )
$.message +='\n【播种】: '+data.message
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}
//三餐列表
async function sclb(timeout = 0) {
    return new Promise((resolve) => {
 
        let url = {
            url: `https://jk-agw-m.simeitol.com/api/health/myjkBasedateFoodData/pageFoods?pageNo=1&pageSize=20&foodClassfication=14`,
            headers: {
    "Host": "jk-agw-h.simeitol.com",
    "Origin": "https://a-jk-h5-m.simeitol.com",
    "myjk-version": "1.5.1.0",
    "myjk-ct": "android",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "myjk-pt": "app_zmjk",
    'myjk-xxxx':AES_Encrypt(t+timestamp + "@@myjk@@" + randomString(8)),
    "myjk-token": `${zmjk_token}`,
  },
        }
      
        $.get(url, async (err, resp, data) => {
            try {
 
                data = JSON.parse(data)
 
                if (data.code == 0) {
                
                for (let i = 0; i < data.data.records.length; i++) {
            data.data.records[i].foodName
            
                console.log(data.data.records[i].foodName)
                
                }
//console.log('\n【答题】: '+data.message )
//$.message +='\n答题   '+datamessage

                } else {
                
 
                }
            } catch (e) {
 
            } finally {
 
                resolve()
            }
        }, timeout)
    })
}



function randomString(e) {
                e = e || 32;
                for (var n = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", t = n.length, a = "", i = 0; i < e; i++)
                    a += n.charAt(Math.floor(Math.random() * t));
                return a
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

function nyr() {
    let date = new Date();
     Y = date.getFullYear() + '-';
     M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
     D = date.getDate();
     let nyr = Y+M+D;
	 return nyr;
}
 function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){if(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:i,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:i,statusCode:r,headers:o,rawBody:h},s.decode(h,this.encoding))},t=>{const{message:i,response:r}=t;e(i,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let i=require("iconv-lite");this.initGotEnv(t);const{url:r,...o}=t;this.got[s](r,o).then(t=>{const{statusCode:s,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:s,statusCode:r,headers:o,rawBody:h},i.decode(h,this.encoding))},t=>{const{message:s,response:r}=t;e(s,r,r&&i.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
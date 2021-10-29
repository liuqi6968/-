/*
软件名称:茄子输入法极速版 安卓 
套用@YaphetS0903 大佬的 qjp.js 


感谢 @YaphetS0903   @tom_2101

适配青龙，环境变量export qzhd='抓取的header1@抓取的header2'

邀请码:ca5537   大家随意哈
(提现未知)

注意！！！！！！！！！只能放本地抓数据！！
因为软件限制，不能调用远程重写抓取数据，只能把脚本放在本地然后抓数据
或者自己使用抓包软件抓取header的json


如果进不去任务界面：
1 vpn关掉后再进入软件，然后再打开vpn获取数据
2 越狱用户可能进不去，暂无解决办法

本脚本以学习为主
好多任务没有写，后续慢慢增加
获取数据： 点击收取猪币获取数据（如果提示无网络，多点几下，或把脚本放在本地，用本地重写获取）。
TG通知群:https://t.me/tom_ww
TG电报交流群: https://t.me/tom_210120
boxjs地址 :  没有


茄子极速版
v2p配置如下，其他自行测试

#茄子极速版
10 6-23 * * *   https://github.com/liuqi6968/-/qz.js, 
#茄子输入法极速版
https://qz.qujianpan.com/qz-main/game/savingsBank/collectPigMoney url script-request-body https://github.com/liuqi6968/-/qz.js
[MITM]
hostname = qz.qujianpan.com
*/

const $ = new Env('茄子极速版');
let status;

status = (status = ($.getval("qzstatus") || "1")) > 1 ? `${status}` : "";
let qzurlArr = [], qzhdArr = [], qzbodyArr = [], qzcount = ''
let qzurl = $.getdata('qzurl')
let qzhd= $.isNode() ? (process.env.qzhd ? process.env.qzhd : "") : ($.getdata('qzhd') ? $.getdata('qzhd') : "")
let qzbody = $.getdata('qzbody')
let b = Math.round(new Date().getTime() / 1000).toString();
let ticket = ''
let DD = RT(28000, 35000)
let tz = ($.getval('tz') || '1');
let tx = ($.getval('tx') || '1');
let id = '', txid = ''
let y = -1
let m = 80
let z= -1
let token = ''
$.message = ''
let qzhds = ""





!(async () => {
    if (typeof $request !== "undefined") {
        await qzck()
    } else {
        if(!$.isNode()){
        qzurlArr.push($.getdata('qzurl'))
        qzhdArr.push($.getdata('qzhd'))
        qzbodyArr.push($.getdata('qzbody'))

        let qzcount = ($.getval('qzcount') || '1');
        for (let i = 2; i <= qzcount; i++) {
            qzurlArr.push($.getdata(`qzurl${i}`))
            qzhdArr.push($.getdata(`qzhd${i}`))
            qzbodyArr.push($.getdata(`qzbody${i}`))
        }
        console.log(
            `\n\n=============================================== 脚本执行 - 北京时间(UTC+8)：${new Date(
                new Date().getTime() +
                new Date().getTimezoneOffset() * 60 * 1000 +
                8 * 60 * 60 * 1000
            ).toLocaleString()} ===============================================\n`);
        for (let i = 0; i < qzhdArr.length; i++) {
            if (qzhdArr[i]) {

                qzurl = qzurlArr[i];
                qzhd = qzhdArr[i];
                qzbody = qzbodyArr[i];

                $.index = i + 1;
                console.log(`\n\n开始【茄子${$.index}】`)


                await $.wait(2000)
                await qzfbk()
                await $.wait(2000)
                await qzcsk()
                await $.wait(2000)
                await qzyqk()
                await $.wait(2000)
                for (let k = 0; k < 3; k++) {
                    if (y < 20) { y++ }
                    $.index = k + 1
                    console.log(`\n【开始第${k + 1}次执行偷好友猪币任务!】\n等待2秒开始偷取`)
                    await $.wait(2000)
                    await qzsteal(y)
                    await $.wait(2000)
                }

                await qzbox()
                await $.wait(2000)

                for (let r = 0; r < 10; r++) {
                    $.index = r + 1
                    if (m < 90) {
                        m++
                    }
                    console.log(`\n【开始第${r + 1}次执行刮刮卡任务!】\n等待2秒开始`)
                    await $.wait(2000)
                    await qzggkzb(m)
                    await $.wait(2000)
                    await qzggkks(m)
                    await $.wait(2000)
                    await qzggkewjlks(m)
                    await $.wait(2000)
                    await qzggkewjlfb(m)
                }
            
                for (let x = 0; x < 2; x++) {
                    $.index = x + 1
                    console.log(`\n【开始第${x + 1}次执行转盘任务!】\n等待2秒开始转盘`)
                    await $.wait(2000)
                    await qzzp()
                    await $.wait(2000)
                }
                  
                for (let t = 0; t < 4; t++) {
                    if (z < 20) { z++ }
                    $.index = t + 1
                    console.log(`\n【开始第${t + 1}次执行集卡任务!】\n等待2秒开始集卡`)
                    await $.wait(2000)
                    await qzjkrw(z)
                    await $.wait(2000)
					await qzjkrwlq(z)
					await $.wait(2000)
                }
                await qzsprw()
                await $.wait(2000)
                await qzsq()
                await $.wait(2000)
                await qzdh()
                await qzqrqd()
                await $.wait(2000)
                await qzbalance()
                y = -1
                m = 80
                z = -1
                message()
            }
        }
    }else  {
        if (process.env.qzhd && process.env.qzhd.indexOf('@') > -1) {
            qzhdArr = process.env.qzhd.split('@');
          console.log(`您选择的是用"@"隔开\n`)
      } else {
        qzhds = [process.env.qzhd]
      };
      Object.keys(qzhds).forEach((item) => {
      if (qzhds[item]) {
        qzhdArr.push(qzhds[item])
      }
  })
        console.log(`共${qzhdArr.length}个cookie`)
          for (let k = 0; k < qzhdArr.length; k++) {
              $.message = ""
              qzhd = qzhdArr[k]
              $.index = k + 1;
        console.log(`\n开始【茄子${$.index}】`)
        await $.wait(2000)
        await qzfbk()
        await $.wait(2000)
        await qzcsk()
        await $.wait(2000)
        await qzyqk()
        await $.wait(2000)
        for (let k = 0; k < 3; k++) {
            if (y < 20) { y++ }
            $.index = k + 1
            console.log(`\n【开始第${k + 1}次执行偷好友猪币任务!】\n等待2秒开始偷取`)
            await $.wait(2000)
            await qzsteal(y)
            await $.wait(2000)
        }

        await qzbox()
        await $.wait(2000)

        for (let r = 0; r < 10; r++) {
            $.index = r + 1
            if (m < 90) {
                m++
            }
            console.log(`\n【开始第${r + 1}次执行刮刮卡任务!】\n等待2秒开始`)
            await $.wait(2000)
            await qzggkzb(m)
            await $.wait(2000)
            await qzggkks(m)
            await $.wait(2000)
            await qzggkewjlks(m)
            await $.wait(2000)
            await qzggkewjlfb(m)
        }
        for (let x = 0; x < 2; x++) {
            $.index = x + 1
            console.log(`\n【开始第${x + 1}次执行转盘任务!】\n等待2秒开始转盘`)
            await $.wait(2000)
            await qzzp()
            await $.wait(2000)
        }
        for (let t = 0; t < 4; t++) {
            if (z < 20) { z++ }
            $.index = t + 1
            console.log(`\n【开始第${t + 1}次执行集卡任务!】\n等待2秒开始集卡`)
            await $.wait(2000)
            await qzjkrw(z)
            await $.wait(2000)
            await qzjkrwlq(z)
            await $.wait(2000)
        }
        await qzsprw()
        await $.wait(2000)
        await qzsq()
        await $.wait(2000)
        await qzdh()
        await qzqrqd()
        await $.wait(2000)
        await qzbalance()
        y = -1
        m = 80
        z = -1
        message()

    }
}


    }
})()

    .catch((e) => $.logErr(e))
    .finally(() => $.done())



function qzck() {
    if ($request.url.indexOf("collectPigMoney") > -1) {
        const qzurl = $request.url
        if (qzurl) $.setdata(qzurl, `qzurl${status}`)
        $.log(qzurl)

        const qzhd = JSON.stringify($request.headers)
        if (qzhd) $.setdata(qzhd, `qzhd${status}`)
        $.log(qzhd)

        const qzbody = $request.body
        if (qzbody) $.setdata(qzbody, `qzbody${status}`)
        $.log(qzbody)

        $.msg($.name, "", `茄子${status}获取headers成功`)

    }
}



//收取金币
function qzsq(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/savingsBank/collectPigMoney`,
            headers: JSON.parse(qzhd),
            body: qzbody,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【收取金币】：${result.data}\n`)
                    $.message += `【收取金币】：${result.data}\n`
                } else {

                    console.log(`【收取失败】：${result.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

//翻倍卡
function qzfbk(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/savingsBank/unlockDouble`,
            headers: JSON.parse(qzhd),
            body: `{
  "taskType": "3"
}`
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【翻倍卡加速】：${result.message}\n`)
                    $.message += `【翻倍卡加速】：${result.message}\n`
                } else {

                    console.log(`【翻倍卡加速】：${result.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}


//财神卡
function qzcsk(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/savingsBank/unlockDouble`,
            headers: JSON.parse(qzhd),
            body: `{
  "taskType": "5"
}`
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【财神卡加速】：${result.message}\n`)
                    $.message += `【财神卡加速】：${result.message}\n`
                } else {

                    console.log(`【财神卡加速】：${result.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}


//邀请好友卡
function qzyqk(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/savingsBank/unlockDouble`,
            headers: JSON.parse(qzhd),
            body: `{
  "taskType": "6"
}`
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【邀请好友加速】：${result.message}\n`)
                    $.message += `【邀请好友加速】：${result.message}\n`
                } else {

                    console.log(`【邀请好友加速】：${result.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}


//偷好友猪币
function qzsteal(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/savingsBankFriend/stealPigMoney`,
            headers: JSON.parse(qzhd),
            body:
                `{
  "friendId": ${y}
}`,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【开始偷取猪币】：${result.message}\n`)
                    console.log(`【成功偷取猪币】：${result.data.stealPigMoney}\n`)
                    $.message += `【开始偷取猪币】：${result.message}\n`
                } else {

                    console.log(`【偷取猪币失败】：${result.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}











//猪币兑换金币
function qzdh(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/savingsBank/exchangePigMoney`,
            headers: JSON.parse(qzhd),
            body: qzbody,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【猪币兑换金币】：${result.message}\n`)
                    console.log(`【成功兑换金币】：${result.data.coin}\n`)
                    $.message += `【猪币兑换金币】：${result.message}\n`
                } else {

                    console.log(`【猪币兑换金币失败】：${result.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}
//开盒子立即领取金币
function qzbox(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/savingsBank/openBox`,
            headers: JSON.parse(qzhd),
            body: qzbody,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【开盒子立即领取金币】：${result.message}\n`)

                    $.message += `【开盒子立即领取金币】：${result.message}\n`

                    tck = result.data.ticket
                    console.log(`【获取到翻倍tck准备翻倍】\n`)
                    console.log(tck)
                    await $.wait(2000)
                    await qzboxdb()
                } else {

                    console.log(`【开盒子立即领取金币失败】：${result.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}



//开盒子立即领取金币翻倍
function qzboxdb(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/savingsBank/doubleBox`,
            headers: JSON.parse(qzhd),
            body: `{
  "ticket": "${tck}"
}`
        }
        $.post(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                if (result.code == 200) {
                    console.log(`【开盒子金币翻倍】：${result.message}\n`)
                    $.message += `【开盒子金币翻倍】：${result.message}\n`

                } else {
                    console.log(`【开盒子金币翻倍失败】：${result.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}






//转盘
function qzzp(timeout = 0) {
    return new Promise((resolve) => {
        //token = qzhd.match(/"Auth-Token":(\d.+)/)[1]
       token=qzhd.match(/"Auth-Token": "(\w.+)"/)[1]
        let url = {
            url: `https://qz.qujianpan.com/qz-main/pig/turntable/draw`,
            headers: //JSON.parse(qzhd),
            {
                "Referer": "https://h5.qujianpan.com/eggplant/qjp-front-eggplant-pig-lottery/index.html",

                "Auth-Token": token,

            },

            body: qzbody,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)


                if (result.code == 200) {
                    if (result.data.type == 1) {

                        console.log(`【转盘抽奖获得金币】：${result.data.rewardNum}\n`)
                      
                    }
                    else {
                        console.log(`【运气真差，转盘抽奖没有获得金币】\n`)
                    }
                } else {

                    console.log(`【转盘抽奖失败】：${result.message}开始看视频增加次数\n`)
                    await qzzpzj()

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

//增加转盘次数
function qzzpzj(timeout = 0) {
    return new Promise((resolve) => {
        //token = qzhd.match(/"Auth-Token":(\d.+)/)[1]
       token=qzhd.match(/"Auth-Token": "(\w.+)"/)[1]
        let url = {
            url: `https://qz.qujianpan.com/qz-main/pig/turntable/addDrawNum`,
            headers: //JSON.parse(qzhd),
            {
                "Referer": "https://h5.qujianpan.com/eggplant/qjp-front-eggplant-pig-lottery/index.html",

                "Auth-Token": token,

            },

            body: qzbody,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)


                if (result.code == 200) {


                    console.log(`【转盘抽奖增加次数】：${result.message}\n`)
                    

                }
                else {

                    console.log(`【转盘抽奖增加次数失败】：${result.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}



//完成视频任务
function qzsprw(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/savingsBank/finishTask`,
            headers: JSON.parse(qzhd),
            body: `{
  "taskCode": "BANK_VIDEO"
}`
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【完成视频任务】：${result.message}\n`)
                    $.message += `【完成视频任务】：${result.message}\n`
                } else {

                    console.log(`【完成视频任务失败】：${result.message}\n`)

                }
                await $.wait(2000)
                await qzfbkrw()


            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

//完成翻倍卡任务
function qzfbkrw(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/savingsBank/finishTask`,
            headers: JSON.parse(qzhd),
            body: `{
  "taskCode": "BANK_DOUBLE"
}`
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【完成翻倍卡任务】：${result.message}\n`)
                    $.message += `【完成翻倍卡任务】：${result.message}\n`
                } else {

                    console.log(`【完成翻倍卡任务失败】：${result.message}\n`)

                }
                await $.wait(2000)
                await qzcskrw()

            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

//完成财神卡任务
function qzcskrw(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/savingsBank/finishTask`,
            headers: JSON.parse(qzhd),
            body: `{
  "taskCode": "BANK_MAMMON"
}`
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【完成财神卡任务】：${result.message}\n`)
                    $.message += `【完成财神卡任务】：${result.message}\n`
                } else {

                    console.log(`【完成财神卡任务失败】：${result.message}\n`)

                }
                await $.wait(2000)
                await qzzbdhrw()


            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

//完成猪币兑换任务
function qzzbdhrw(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/savingsBank/finishTask`,
            headers: JSON.parse(qzhd),
            body: `{
  "taskCode": "BANK_PIG_MONEY"
}`
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【完成猪币兑换任务】：${result.message}\n`)
                    $.message += `【完成猪币兑换任务】：${result.message}\n`
                } else {

                    console.log(`【完成猪币兑换任务失败】：${result.message}\n`)

                }
                await $.wait(2000)
                await qzzpcjrw()


            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

//完成转盘抽奖任务
function qzzpcjrw(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/savingsBank/finishTask`,
            headers: JSON.parse(qzhd),
            body: `{
  "taskCode": "BANK_PIG_TURNTABLE"
}`
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【完成转盘抽奖任务】：${result.message}\n`)
                    $.message += `【完成转盘抽奖任务】：${result.message}\n`
                } else {

                    console.log(`【完成转盘抽奖任务失败】：${result.message}\n`)

                }
                await $.wait(2000)
                await qzstealrw()

            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}

//完成偷好友猪币任务
function qzstealrw(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/savingsBank/finishTask`,
            headers: JSON.parse(qzhd),
            body: `{
  "taskCode": "BANK_FRIEND_STEAL"
}`
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【完成偷好友猪币任务】：${result.message}\n`)
                    $.message += `【完成偷好友猪币任务】：${result.message}\n`
                } else {

                    console.log(`【完成偷好友猪币任务失败】：${result.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}


//查看金币余额
function qzbalance(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://qz.qujianpan.com/qz-main/pig/turntable/info`,
            headers: JSON.parse(qzhd),
            body: qzbody,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【开始查询金币余额】：${result.message}\n`)
                    console.log(`【金币余额】：${result.data.balance}\n`)
                    $.message += `【金币余额】：${result.data.balance}\n`
                } else {

                    console.log(`【查询金币余额失败】：${result.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}


///刮卡准备
function qzggkzb(m) {
    return new Promise((resolve) => {
        token=qzhd.match(/"Auth-Token": "(\w.+)"/)[1]

        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/guagua/getAwardDetail?awardId=${m}`,
            headers: {
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-cn",
                "Connection": "keep-alive",
                "Auth-Token": token,
                "Host": "qz.qujianpan.com",
                "Origin": "https://h5.qujianpan.com",
                "Referer": "https://h5.qujianpan.com/eggplant/qjp-front-eggplant-scratch-card/index.html",

            },


        }
        $.get(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【刮刮卡开始】}\n`)
                   
                } else {

                    console.log(`【刮刮卡准备失败】：${result.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, 0)
    })
}

//刮刮卡开始
function qzggkks(m) {
    return new Promise((resolve) => {
        token=qzhd.match(/"Auth-Token": "(\w.+)"/)[1]

        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/guagua/acquireAward?awardId=${m}`,
            headers: {
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-cn",
                "Connection": "keep-alive",
                "Auth-Token": token,
                "Host": "qz.qujianpan.com",
                "Origin": "https://h5.qujianpan.com",
                "Referer": "https://h5.qujianpan.com/eggplant/qjp-front-eggplant-scratch-card/index.html",

            },

        }
        $.get(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {


                    console.log(`【刮刮卡开始刮取id】：${result.data.coinAdded}\n`)
                    console.log(`【当前金币总数】：${result.data.coinBalance}\n`)
                   
                } else {

                    console.log(`【刮刮卡开始失败时间未到或已刮过】：${result.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, 0)
    })
}


//刮刮卡额外奖励开始
function qzggkewjlks(m) {
    return new Promise((resolve) => {
        token=qzhd.match(/"Auth-Token": "(\w.+)"/)[1]

        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/guagua/acquireExtraAward?awardId=${m}`,
            headers: {
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-cn",
                "Connection": "keep-alive",
                "Auth-Token": token,
                "Host": "qz.qujianpan.com",
                "Origin": "https://h5.qujianpan.com",
                "Referer": "https://h5.qujianpan.com/eggplant/qjp-front-eggplant-scratch-card/index.html",

            },

        }
        $.get(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【刮刮卡额外奖励开始】：${result.message}\n`)
                    console.log(`【获得金币】：${result.data.coinAdded}\n`)
                    console.log(`【当前金币总数】：${result.data.coinBalance}\n`)
                   
                } else {

                    console.log(`【刮刮卡额外奖励开始失败】：${result.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, 0)
    })
}



//刮刮卡额外奖励翻倍
function qzggkewjlfb(m) {
    return new Promise((resolve) => {
        token=qzhd.match(/"Auth-Token": "(\w.+)"/)[1]

        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/guagua/extraDouble?awardId=${m}`,
            headers: {
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-cn",
                "Connection": "keep-alive",
                "Auth-Token": token,
                "Host": "qz.qujianpan.com",
                "Origin": "https://h5.qujianpan.com",
                "Referer": "https://h5.qujianpan.com/eggplant/qjp-front-eggplant-scratch-card/index.html",

            },

        }
        $.get(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【刮刮卡额外奖励翻倍开始】：${result.message}\n`)
                    console.log(`【获得金币】：${result.data.coinAdded}\n`)
                    console.log(`【当前金币总数】：${result.data.coinBalance}\n`)
                    
                } else {

                    console.log(`【刮刮卡额外奖励翻倍开始失败】：${result.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, 0)
    })
}



//集卡任务
function qzjkrw(z) {
    return new Promise((resolve) => {

        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/tiantianCard/doneCard?cardType=${z}`,
            headers: JSON.parse(qzhd),
            
        }
        $.get(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【集卡完成任务】：${result.message}\n`)
					
                  
                } else {

                    console.log(`【集卡完成任务失败】：${result.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, 0)
    })
}

//集卡任务领取
function qzjkrwlq(z) {
    return new Promise((resolve) => {

        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/tiantianCard/acquireCard?cardType=${z}`,
            headers: JSON.parse(qzhd),
            
        }
        $.get(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【集卡领取】：${result.message}\n`)
					
                   
                } else {

                    console.log(`【集卡领取失败】：${result.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, 0)
    })
}



//7日签到
function qzqrqd(timeout = 0) {
    return new Promise((resolve) => {

        let url = {
            url: `https://qz.qujianpan.com/qz-main/game/savingsBank/signIn`,
            headers: JSON.parse(qzhd),
            body: qzbody,
        }
        $.post(url, async (err, resp, data) => {
            try {

                const result = JSON.parse(data)

                if (result.code == 200) {

                    console.log(`【开始七日签到】：${result.message}\n`)
					console.log(`【当前签到天数】：${result.data.days}\n`)
					console.log(`【获得经验】：${result.data.experience}\n`)
					console.log(`【获得猪币】：${result.data.pigMoney}\n`)
                    $.message += `【开始七日签到】：${result.message}\n`
					$.message += `【当前签到天数】：${result.data.days}\n`
					$.message += `【获得经验】：${result.data.experience}\n`
					$.message += `【获得猪币】：${result.data.pigMoney}\n`
                } else {

                    console.log(`【开始七日签到失败】：${result.message}\n`)

                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, timeout)
    })
}


function message() {
    if (tz == 1) { $.msg($.name, "", $.message) }
}

function RT(X, Y) {
    do rt = Math.floor(Math.random() * Y);
    while (rt < X)
    return rt;
}


//console.log('\n'+getCurrentDate());
function getCurrentDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;


}











function Env(name, opts) {
    class Http {
        constructor(env) {
            this.env = env
        }
        send(opts, method = 'GET') {
            opts = typeof opts === 'string' ? {
                url: opts
            } : opts
            let sender = this.get
            if (method === 'POST') {
                sender = this.post
            }
            return new Promise((resolve, reject) => {
                sender.call(this, opts, (err, resp, body) => {
                    if (err) reject(err)
                    else resolve(resp)
                })
            })
        }
        get(opts) {
            return this.send.call(this.env, opts)
        }
        post(opts) {
            return this.send.call(this.env, opts, 'POST')
        }
    }
    return new (class {
        constructor(name, opts) {
            this.name = name
            this.http = new Http(this)
            this.data = null
            this.dataFile = 'box.dat'
            this.logs = []
            this.isMute = false
            this.isNeedRewrite = false
            this.logSeparator = '\n'
            this.startTime = new Date().getTime()
            Object.assign(this, opts)
            this.log('', `🔔${this.name
                }, 开始!`)
        }
        isNode() {
            return 'undefined' !== typeof module && !!module.exports
        }
        isQuanX() {
            return 'undefined' !== typeof $task
        }
        isSurge() {
            return 'undefined' !== typeof $httpClient && 'undefined' === typeof $loon
        }
        isLoon() {
            return 'undefined' !== typeof $loon
        }
        isShadowrocket() {
            return 'undefined' !== typeof $rocket
        }
        toObj(str, defaultValue = null) {
            try {
                return JSON.parse(str)
            } catch {
                return defaultValue
            }
        }
        toStr(obj, defaultValue = null) {
            try {
                return JSON.stringify(obj)
            } catch {
                return defaultValue
            }
        }
        getjson(key, defaultValue) {
            let json = defaultValue
            const val = this.getdata(key)
            if (val) {
                try {
                    json = JSON.parse(this.getdata(key))
                } catch { }
            }
            return json
        }
        setjson(val, key) {
            try {
                return this.setdata(JSON.stringify(val), key)
            } catch {
                return false
            }
        }
        getScript(url) {
            return new Promise((resolve) => {
                this.get({
                    url
                }, (err, resp, body) => resolve(body))
            })
        }
        runScript(script, runOpts) {
            return new Promise((resolve) => {
                let httpapi = this.getdata('@chavy_boxjs_userCfgs.httpapi')
                httpapi = httpapi ? httpapi.replace(/\n/g, '').trim() : httpapi
                let httpapi_timeout = this.getdata('@chavy_boxjs_userCfgs.httpapi_timeout')
                httpapi_timeout = httpapi_timeout ? httpapi_timeout * 1 : 20
                httpapi_timeout = runOpts && runOpts.timeout ? runOpts.timeout : httpapi_timeout
                const [key, addr] = httpapi.split('@')
                const opts = {
                    url: `http: //${addr}/v1/scripting/evaluate`,
                    body: {
                        script_text: script,
                        mock_type: 'cron',
                        timeout: httpapi_timeout
                    },
                    headers: {
                        'X-Key': key,
                        'Accept': '*/*'
                    }
                }
                this.post(opts, (err, resp, body) => resolve(body))
            }).catch((e) => this.logErr(e))
        }
        loaddata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require('fs')
                this.path = this.path ? this.path : require('path')
                const curDirDataFilePath = this.path.resolve(this.dataFile)
                const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
                const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
                const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
                if (isCurDirDataFile || isRootDirDataFile) {
                    const datPath = isCurDirDataFile ? curDirDataFilePath : rootDirDataFilePath
                    try {
                        return JSON.parse(this.fs.readFileSync(datPath))
                    } catch (e) {
                        return {}
                    }
                } else return {}
            } else return {}
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require('fs')
                this.path = this.path ? this.path : require('path')
                const curDirDataFilePath = this.path.resolve(this.dataFile)
                const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
                const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
                const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
                const jsondata = JSON.stringify(this.data)
                if (isCurDirDataFile) {
                    this.fs.writeFileSync(curDirDataFilePath, jsondata)
                } else if (isRootDirDataFile) {
                    this.fs.writeFileSync(rootDirDataFilePath, jsondata)
                } else {
                    this.fs.writeFileSync(curDirDataFilePath, jsondata)
                }
            }
        }
        lodash_get(source, path, defaultValue = undefined) {
            const paths = path.replace(/[(d+)]/g, '.$1').split('.')
            let result = source
            for (const p of paths) {
                result = Object(result)[p]
                if (result === undefined) {
                    return defaultValue
                }
            }
            return result
        }
        lodash_set(obj, path, value) {
            if (Object(obj) !== obj) return obj
            if (!Array.isArray(path)) path = path.toString().match(/[^.[]]+/g) || []
            path
                .slice(0, -1)
                .reduce((a, c, i) => (Object(a[c]) === a[c] ? a[c] : (a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1] ? [] : {})), obj)[
                path[path.length - 1]
            ] = value
            return obj
        }
        getdata(key) {
            let val = this.getval(key)
            // 如果以 @
            if (/^@/.test(key)) {
                const [, objkey, paths] = /^@(.*?).(.*?)$/.exec(key)
                const objval = objkey ? this.getval(objkey) : ''
                if (objval) {
                    try {
                        const objedval = JSON.parse(objval)
                        val = objedval ? this.lodash_get(objedval, paths, '') : val
                    } catch (e) {
                        val = ''
                    }
                }
            }
            return val
        }
        setdata(val, key) {
            let issuc = false
            if (/^@/.test(key)) {
                const [, objkey, paths] = /^@(.*?).(.*?)$/.exec(key)
                const objdat = this.getval(objkey)
                const objval = objkey ? (objdat === 'null' ? null : objdat || '{}') : '{}'
                try {
                    const objedval = JSON.parse(objval)
                    this.lodash_set(objedval, paths, val)
                    issuc = this.setval(JSON.stringify(objedval), objkey)
                } catch (e) {
                    const objedval = {}
                    this.lodash_set(objedval, paths, val)
                    issuc = this.setval(JSON.stringify(objedval), objkey)
                }
            } else {
                issuc = this.setval(val, key)
            }
            return issuc
        }
        getval(key) {
            if (this.isSurge() || this.isLoon()) {
                return $persistentStore.read(key)
            } else if (this.isQuanX()) {
                return $prefs.valueForKey(key)
            } else if (this.isNode()) {
                this.data = this.loaddata()
                return this.data[key]
            } else {
                return (this.data && this.data[key]) || null
            }
        }
        setval(val, key) {
            if (this.isSurge() || this.isLoon()) {
                return $persistentStore.write(val, key)
            } else if (this.isQuanX()) {
                return $prefs.setValueForKey(val, key)
            } else if (this.isNode()) {
                this.data = this.loaddata()
                this.data[key] = val
                this.writedata()
                return true
            } else {
                return (this.data && this.data[key]) || null
            }
        }
        initGotEnv(opts) {
            this.got = this.got ? this.got : require('got')
            this.cktough = this.cktough ? this.cktough : require('tough-cookie')
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()
            if (opts) {
                opts.headers = opts.headers ? opts.headers : {}
                if (undefined === opts.headers.Cookie && undefined === opts.cookieJar) {
                    opts.cookieJar = this.ckjar
                }
            }
        }
        get(opts, callback = () => { }) {
            if (opts.headers) {
                delete opts.headers['Content-Type']
                delete opts.headers['Content-Length']
            }
            if (this.isSurge() || this.isLoon()) {
                if (this.isSurge() && this.isNeedRewrite) {
                    opts.headers = opts.headers || {}
                    Object.assign(opts.headers, {
                        'X-Surge-Skip-Scripting': false
                    })
                }
                $httpClient.get(opts, (err, resp, body) => {
                    if (!err && resp) {
                        resp.body = body
                        resp.statusCode = resp.status
                    }
                    callback(err, resp, body)
                })
            } else if (this.isQuanX()) {
                if (this.isNeedRewrite) {
                    opts.opts = opts.opts || {}
                    Object.assign(opts.opts, {
                        hints: false
                    })
                }
                $task.fetch(opts).then(
                    (resp) => {
                        const {
                            statusCode: status,
                            statusCode,
                            headers,
                            body
                        } = resp
                        callback(null, {
                            status,
                            statusCode,
                            headers,
                            body
                        }, body)
                    },
                    (err) => callback(err)
                )
            } else if (this.isNode()) {
                this.initGotEnv(opts)
                this.got(opts)
                    .on('redirect', (resp, nextOpts) => {
                        try {
                            if (resp.headers['set-cookie']) {
                                const ck = resp.headers['set-cookie'].map(this.cktough.Cookie.parse).toString()
                                if (ck) {
                                    this.ckjar.setCookieSync(ck, null)
                                }
                                nextOpts.cookieJar = this.ckjar
                            }
                        } catch (e) {
                            this.logErr(e)
                        }
                        // this.ckjar.setCookieSync(resp.headers['set-cookie'].map(Cookie.parse).toString())
                    })
                    .then(
                        (resp) => {
                            const {
                                statusCode: status,
                                statusCode,
                                headers,
                                body
                            } = resp
                            callback(null, {
                                status,
                                statusCode,
                                headers,
                                body
                            }, body)
                        },
                        (err) => {
                            const {
                                message: error,
                                response: resp
                            } = err
                            callback(error, resp, resp && resp.body)
                        }
                    )
            }
        }
        post(opts, callback = () => { }) {
            const method = opts.method ? opts.method.toLocaleLowerCase() : 'post'
            // 如果指定了请求体, 但没指定`Content-Type`, 则自动生成
            if (opts.body && opts.headers && !opts.headers['Content-Type']) {
                opts.headers['Content-Type'] = 'application/x-www-form-urlencoded'
            }
            if (opts.headers) delete opts.headers['Content-Length']
            if (this.isSurge() || this.isLoon()) {
                if (this.isSurge() && this.isNeedRewrite) {
                    opts.headers = opts.headers || {}
                    Object.assign(opts.headers, {
                        'X-Surge-Skip-Scripting': false
                    })
                }
                $httpClient[method](opts, (err, resp, body) => {
                    if (!err && resp) {
                        resp.body = body
                        resp.statusCode = resp.status
                    }
                    callback(err, resp, body)
                })
            } else if (this.isQuanX()) {
                opts.method = method
                if (this.isNeedRewrite) {
                    opts.opts = opts.opts || {}
                    Object.assign(opts.opts, {
                        hints: false
                    })
                }
                $task.fetch(opts).then(
                    (resp) => {
                        const {
                            statusCode: status,
                            statusCode,
                            headers,
                            body
                        } = resp
                        callback(null, {
                            status,
                            statusCode,
                            headers,
                            body
                        }, body)
                    },
                    (err) => callback(err)
                )
            } else if (this.isNode()) {
                this.initGotEnv(opts)
                const {
                    url,
                    ..._opts
                } = opts
                this.got[method](url, _opts).then(
                    (resp) => {
                        const {
                            statusCode: status,
                            statusCode,
                            headers,
                            body
                        } = resp
                        callback(null, {
                            status,
                            statusCode,
                            headers,
                            body
                        }, body)
                    },
                    (err) => {
                        const {
                            message: error,
                            response: resp
                        } = err
                        callback(error, resp, resp && resp.body)
                    }
                )
            }
        }
        /**
         *
         * 示例:$.time('yyyy-MM-dd qq HH:mm:ss.S')
         *    :$.time('yyyyMMddHHmmssS')
         *    y:年 M:月 d:日 q:季 H:时 m:分 s:秒 S:毫秒
         *    其中y可选0-4位占位符、S可选0-1位占位符，其余可选0-2位占位符
         * @param {string} fmt 格式化参数
         * @param {number} 可选: 根据指定时间戳返回格式化日期
         *
         */
        time(fmt, ts = null) {
            const date = ts ? new Date(ts) : new Date()
            let o = {
                'M+': date.getMonth() + 1,
                'd+': date.getDate(),
                'H+': date.getHours(),
                'm+': date.getMinutes(),
                's+': date.getSeconds(),
                'q+': Math.floor((date.getMonth() + 3) / 3),
                'S': date.getMilliseconds()
            }
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
            for (let k in o)
                if (new RegExp('(' + k + ')').test(fmt))
                    fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
            return fmt
        }
        /**
         * 系统通知
         *
         * > 通知参数: 同时支持 QuanX 和 Loon 两种格式, EnvJs根据运行环境自动转换, Surge 环境不支持多媒体通知
         *
         * 示例:
         * $.msg(title, subt, desc, 'twitter://')
         * $.msg(title, subt, desc, { 'open-url': 'twitter://', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
         * $.msg(title, subt, desc, { 'open-url': 'https://bing.com', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
         *
         * @param {*} title 标题
         * @param {*} subt 副标题
         * @param {*} desc 通知详情
         * @param {*} opts 通知参数
         *
         */
        msg(title = name, subt = '', desc = '', opts) {
            const toEnvOpts = (rawopts) => {
                if (!rawopts) return rawopts
                if (typeof rawopts === 'string') {
                    if (this.isLoon()) return rawopts
                    else if (this.isQuanX()) return {
                        'open-url': rawopts
                    }
                    else if (this.isSurge()) return {
                        url: rawopts
                    }
                    else return undefined
                } else if (typeof rawopts === 'object') {
                    if (this.isLoon()) {
                        let openUrl = rawopts.openUrl || rawopts.url || rawopts['open-url']
                        let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
                        return {
                            openUrl,
                            mediaUrl
                        }
                    } else if (this.isQuanX()) {
                        let openUrl = rawopts['open-url'] || rawopts.url || rawopts.openUrl
                        let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
                        return {
                            'open-url': openUrl,
                            'media-url': mediaUrl
                        }
                    } else if (this.isSurge()) {
                        let openUrl = rawopts.url || rawopts.openUrl || rawopts['open-url']
                        return {
                            url: openUrl
                        }
                    }
                } else {
                    return undefined
                }
            }
            if (!this.isMute) {
                if (this.isSurge() || this.isLoon()) {
                    $notification.post(title, subt, desc, toEnvOpts(opts))
                } else if (this.isQuanX()) {
                    $notify(title, subt, desc, toEnvOpts(opts))
                }
            }
            if (!this.isMuteLog) {
                let logs = ['', '==============📣系统通知📣==============']
                logs.push(title)
                subt ? logs.push(subt) : ''
                desc ? logs.push(desc) : ''
                console.log(logs.join('\n'))
                this.logs = this.logs.concat(logs)
            }
        }
        log(...logs) {
            if (logs.length > 0) {
                this.logs = [...this.logs, ...logs]
            }
            console.log(logs.join(this.logSeparator))
        }
        logErr(err, msg) {
            const isPrintSack = !this.isSurge() && !this.isQuanX() && !this.isLoon()
            if (!isPrintSack) {
                this.log('', `❗️${this.name
                    }, 错误!`, err)
            } else {
                this.log('', `❗️${this.name
                    }, 错误!`, err.stack)
            }
        }
        wait(time) {
            return new Promise((resolve) => setTimeout(resolve, time))
        }
        done(val = {}) {
            const endTime = new Date().getTime()
            const costTime = (endTime - this.startTime) / 1000
            this.log('', `🔔${this.name
                }, 结束!🕛${costTime}秒`)
            this.log()
            if (this.isSurge() || this.isQuanX() || this.isLoon()) {
                $done(val)
            }
        }
    })(name, opts)
}


const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-')
}

function connectionFail(res){
  console.log('通信失败公用处理');
}

function connectionComplete(res) {
  console.log('通信执行完成公共处理');
}

/* data和success必须传
  dataObject={
      data:{},双括号的js对象
      success:function(e){
        通信成功处理函数
      },
      fail:function（e）{
        通行失败处理函数
      },
      complete:function(e){
        通信执行完成处理函数
      }
}
*/
const doServerAction = dataObject => {
  wx.request({
    url: 'https://www.liulinbo.com',
    data: {
      recv: dataObject.data
    },
    header: {
      'content-type': 'application/json'
    },
    method: 'POST',
    dataType: 'json',
    responseType: 'text',
    success: dataObject.success,
    fail: dataObject.fail === undefined ? function(res){
      connectionFail(res)
    }: dataObject.fail,
    complete: function(res){
      connectionComplete(res);
      dataObject.complete === undefined ? console.log('我也不知道写啥'):dataObject.complete(res);
    }
  })
}

module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  doServerAction: doServerAction
}

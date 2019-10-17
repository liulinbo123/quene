//index.js
//获取应用实例
const app = getApp()
var result = [{ tradename: "开户", url: "../test1/test1" }, { tradename: "存款", url: "../test2/test2" }, { tradename: "转账", url: "../test3/test3" }, { tradename: "取款", url: "../test4/test4" }, { tradename: "理财", url: "../test5/test5"}];
Page({
  data: {
    trademenu:[{tradename:"开户"}]
  },
  onLoad: function () {
    this.setData({
      trademenu:result
    });
  },
  tradeclick:function (event) {
    var tradeinfo = result[event.currentTarget.dataset.index];
    wx.navigateTo({
      url: tradeinfo.url
    });
  }
})

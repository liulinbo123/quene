var util = require('../../utils/util.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    cardtype: ['第一代身份证', '第二代身份证', '港澳台通行证', '军官证', '士兵证'],
    cardtypevalue: '第二代身份证',
    sextype:['男', '女'],
    sexvalue:'男',
    countrytype:['中国', '外国'],
    countryvalue: '中国',
    nationtype:['汉族','少数民族'],
    nationvalue:'汉',
    borthdate: util.formatDate(new Date()),
    enddate: util.formatDate(new Date()),
    regionvalue: ['江西省', '赣州市', '章贡区'],
    customItem: '全部'
  },
  bindPickerChange: function(e) {
    console.log(e.detail.value);
    this.setData({
      cardtypevalue: this.data.cardtype[e.detail.value]
    });
  },
  bindDateChange: function(e){
    console.log(e.detail.value);
    this.setData({
      borthdate: e.detail.value
    });
  },
  bindSexChange: function(e){
    console.log(e.detail.value);
    this.setData({
      sexvalue: this.data.sextype[e.detail.value]
    });
  },
  bindCountryChange: function(e){
    console.log(e.detail.value);
    this.setData({
      countryvalue: this.data.countrytype[e.detail.value]
    });
  },
  bindNationChange: function (e) {
    console.log(e.detail.value);
    this.setData({
      nationvalue: this.data.nationtype[e.detail.value]
    });
  },
  bindRegionChange: function(e){
    console.log(e.detail.value);
    this.setData({
      regionvalue: e.detail.value
    });
  },
  clickbtn: function() {
    util.doServerAction({
      data:{
        cunstomer:{
          name: '柳林比',
          age: 26
        }
      },
      success:function(res){
        wx.navigateTo({
          url: '../wxcomponent/msg/msg',
        })
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: "开户预填单信息"
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
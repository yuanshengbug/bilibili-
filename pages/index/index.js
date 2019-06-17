Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 获取当前点击的索引
    currentIndexNav:0,
    // 导航数据
    navList:[],
    // 轮播图
    swiperList:[],
    // 获取视频列表
    videosList:[]
  },
  // 点击首页导航按钮
  activeNav(e){
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },
  // 发送请求获取导航栏数据
  getNavList(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
     success(res){
      if(res.data.code===0){
        that.setData({
          navList:res.data.data.navList
        })
      }
     }
    })
  },
  // 获取轮播图
  getswiperList(){
    let that = this
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      // 执行回调函数
      success(res){
       if(res.data.code===0){
         that.setData({
           swiperList: res.data.data.swiperList
         })
       }
      }
    })
  },
  // 获取视频列表数据
  getvideosList(){
    let that = this
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      // 成功后执行回调函数
      success(res){
      //  判断
      if(res.data.code === 0){
        that.setData({
          videosList: res.data.data.videosList
        })
      }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取导航栏数据
    this.getNavList();
    // 获取轮播图数据
    this.getswiperList();
    // 获取视频数据
    this.getvideosList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
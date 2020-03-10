//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    all_check_arr:[false],
    check_arr:[false,false,false]
  },
  
  onLoad: function () {
    
  },
  // 点击全选复选框
  all_check_change(e){
    let check_arr_length = this.data.check_arr.length;
    let check_arr = new Array(check_arr_length).fill(false);
    if (e.detail.value[0]==""){
      check_arr = new Array(check_arr_length).fill(true);
    }
    this.setData({
      check_arr: check_arr
    })
  },
  // 点击每个复选框
  item_check_change(e){
    let index = e.currentTarget.dataset.index;
    let check_arr = this.data.check_arr;
    let all_check_arr = this.data.all_check_arr;
    if (e.detail.value[0] == ""){
      check_arr[index] = true; // 设置选择的复选框的checked值
    }else{
      check_arr[index] = false; // 设置选择的复选框的checked值
      all_check_arr = [false];//只要有一个复选框没选中，则全选不选中
    }
    if (check_arr.indexOf(false)==-1){//复选框全部选中，全选复选框选中
      all_check_arr= [true];
    }
    this.setData({
      check_arr: check_arr,
      all_check_arr: all_check_arr
    })
  }
})

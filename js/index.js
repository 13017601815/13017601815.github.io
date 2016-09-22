var txt = document.querySelector('#txt');
var item = document.querySelector('#item');
var data = [{
  imgUrl:"http://i8.mifile.cn/v1/a1/65981365-72b0-d254-c4fb-e20225f10e4f.jpg",
  infoName:"红米Note4",
  infoBrief:"Helio X20 十 核旗舰处理器 / 全金属一体化机身 / 4100Ah大电量",
  infoPrice:"899元 起"
},{
  imgUrl:"http://i8.mifile.cn/v1/a1/18234d8c-0026-9b84-d9df-fe483de6079e.jpg",
  infoName:"红米Pro",
  infoBrief:"硬件级实时背景虚化 / Helio X20 十核旗舰处理 / 5.5” OLED 超鲜艳屏幕 / 拉丝全金属机身",
  infoPrice:"1499元 起"
},{
  imgUrl:"http://i8.mifile.cn/v1/a1/517db742-917d-d2ef-5953-066c2c2f6625.jpg",
  infoName:"红米手机3S",
  infoBrief:"指纹识别 / 全网通双卡双待 / 金属机身 / 4100mAh大电池",
  infoPrice:"699元 起"
},{
  imgUrl:"http://i1.mifile.cn/v1/a1/T1VNJjBsdT1RXrhCrK.jpg",
  infoName:"红米Note3",
  infoBrief:"【9.22早10点开售！】金属机身 / 指纹识别 / 4050mAh大电池 / 5.5英寸全高清屏",
  infoPrice:"799元 起"
},{
  imgUrl:"http://i8.mifile.cn/v1/a1/T1XSE_B5x_1RXrhCrK.jpg",
  infoName:"小米Max全网通",
  infoBrief:'6.44"大屏黄金尺寸 / 4850mAh 大电量 / 指纹识别 / 2.5D玻璃',
  infoPrice:"1299元 起"
},{
  imgUrl:"http://i8.mifile.cn/v1/a1/T14xJTByZ_1RXrhCrK.jpg",
  infoName:"小米手机5标准版/高配版",
  infoBrief:'骁龙820处理器 / 4轴防抖相机 / 新增支持双开微信，能刷公交卡、银行卡',
  infoPrice:"1799元 起"
},{
  imgUrl:"http://i8.mifile.cn/v1/a1/dc39e456-a433-4b59-c329-36f3ce00c1f1.jpg",
  infoName:"小米5 尊享版",
  infoBrief:'骁龙820处理器 / 4GB 内存 / 128GB 闪存 / 4轴防抖相机 / 3D陶瓷机身',
  infoPrice:"2499元 起"
}];

function initCtrl(data){
  var itemHtml = '';
  data.forEach(function(item){
    itemHtml += '<div id="img"><img src=' + item.imgUrl + '></div>' +'<div id="info"><div id="name"><span>' + item.infoName + '</span></div>' + '<div id="brief"><span>' + item.infoBrief + '</span></div>' + '<div id="price"><span>' + item.infoPrice + '</span></div></div>';
    console.log(item.infoName);
  });
  item.innerHTML = itemHtml;
}
initCtrl(data);

txt.onkeyup = function(e){
  var str = txt.value;
  var result = data.filter(function(item){
    if(item.infoName.indexOf(str)>-1 || item.infoBrief.indexOf(str)>-1 || item.infoPrice.indexOf(str)>-1){
      return item;
    }
  });
  initCtrl(result);
}

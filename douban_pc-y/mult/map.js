// 对象  高德地图
const googleMap = {
    show() {
        console.log("开始渲染GOOL地图");
    }
}
const baiduMap = {
    // 为互换做准备
    show() {
        console.log("开始渲染百度地图");
    }
}
const gaodeMap = {
    show() {
        console.log("开始渲染高德地图");
    }
}
const sosoMap = {
    show() {
        console.log("开始渲染搜搜地图");
    }
}
/**
 * 
 * @param {object} map 
 */
const readerMap = (map) => {
    // map 检测有没有这个方法
    // if (map.show &&typeof map.show ==='function' ) {
    //     map.show();
    // }
    if (map.show &&map.show instanceof Function ) {
        map.show();
    }
   
    // googleMap.show ();
    // 分支太多
    // if(type === 'baidu')
    // baiduMap.show()
    // else if(type === 'google')
    // googleMap.show()
    // else if (type === 'gaode')
    // gaodeMap.show()

}
readerMap(baiduMap);
readerMap(googleMap);
readerMap(sosoMap);

// 共用js封装
var Base = {
    // 合并对象
    extend: function(obj,newobj) {
        for(var key in newobj){
            if(newobj.hasOwnProperty(key) && obj.hasOwnProperty(key)){
                obj[key]=newobj[key];
            }
        }
        return obj;
    }
}
export default Base;

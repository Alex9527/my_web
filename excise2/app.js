



//对数组卡牌随机排序
function xipai(array) {
   return array.sort(function() {
    return Math.random()>0.5?1:-1
   }) 
}
// 重置卡牌
$('.restart').on('click',function() {
        var cardArray = [
        "fa-diamond","fa-diamond",
        "fa-paper-plane-o","fa-paper-plane-o",
        "fa-anchor","fa-anchor",
        "fa-bolt","fa-bolt",
        "fa-cube","fa-cube",
        "fa-leaf","fa-leaf",
        "fa-bicycle","fa-bicycle",
        "fa-bomb","fa-bomb"
        ];
        var newCardArray = xipai(cardArray);   //洗牌
		$('.deck li').removeClass('open show match');  
    
        //将pic的class名分配给各个卡片
		$('.deck').find('i').each(function() {           
            var array1 = newCardArray.shift() //删除第一个元素数组并返回值
            $(this).removeClass().addClass('fa '+array1);
        })

    })
 

//翻牌函数
const turnOn = function(pic) {
    pic.addClass('open show')
    return pic.children().attr('class');
}
//传入翻牌数组信息
let openArray = [];
const creatOpenArray =function(card){    
    openArray.push(card);
    return openArray;
} 
// 比较数组，通过数组结果判断所有卡牌的状态，根据特定的class名进行更新
const compare = function(a) {
    if (a.length === 1) {
             return
    }   else if (a.length === 2 && a[0] === a[1]) {
            a.length = 0;
            $("li[class ~= 'open']").removeClass('open show').addClass('match')
            return true;
    }   else if (a.length === 2 && a[0] !== a[1]) {
            a.length = 0;
            $("li[class ~= 'open']").removeClass('open show')
            return false;
    }   else {
            a.length = 0;
            $("li[class ~= 'open']").removeClass('open show match')
    }
}



//仅对closecard卡牌监听
$('.deck').on('click',"li[class='card']",function() {
    turnOn($(this));                    
    creatOpenArray(turnOn($(this)));
    setTimeout('compare(openArray)',500);      
    starsLevel()
    

    
})












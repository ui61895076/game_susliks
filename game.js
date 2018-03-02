
var game={
    _col:5,
    _row:5,
    _boxW:60,
    _boxH:60,
    _score:0,
    init:function(){//初始化
        this.drawMap()
        this.random_susliks()
        this.event_susliks()

    },
    drawMap:function(){//自动生成地图格子 5*5
        var panel= document.getElementById('panel');
        panel.style.width = this._col*this._boxW+'px';
        panel.style.height = this._row*this._boxH+'px';
        for(var i=0;i<this._col;i++){
            for(var j=0;j<this._row;j++){
                var box=document.createElement('div');
                box.setAttribute('class','box');
                box.style.top= this._boxH*i+'px';
                box.style.left= this._boxW*j+'px';
               // box.innerHTML=i*this._col+j+'</br>'+'['+i+','+j+']';
                panel.appendChild(box);
            }
        }
    },

    random_susliks:function(){// 随机生成3个地鼠

        var This=this;
        var timer =setInterval(function(){
            This.clear_map()

            for(var i=0;i<3;i++){
                var _x=Math.floor(Math.random()*(This._row));
                var _y=Math.floor(Math.random()*(This._col));

                var ranNum=(_x*This._col)+_y
                console.log(ranNum+'<br>',_x,_y)
                var panel= document.getElementById('panel');
                var aBox=panel.getElementsByTagName('div');
                console.log(aBox.length)
                aBox[ranNum].className='ds_up'
            }



            },1000)
    },

 clear_map:function(){ //每次生成一次地鼠，就擦除一次地图
     var panel= document.getElementById('panel');
     var aBox=panel.getElementsByTagName('div');
     for(var i=0;i<aBox.length;i++){
         aBox[i].setAttribute('class','box');
     }
 },

    event_susliks:function(){ //点击地鼠 得分，并且图片改变
        var This=this;
        var panel= document.getElementById('panel');
        var score= document.getElementById('score');
        panel.onclick=function (ev) {
            var ev=ev||window.event;
            var target=ev.target||ev.srcElement;
            if(target.className.toLowerCase()=='ds_up'){
               This._score+=1;
                score.innerHTML='当前得分'+This._score+'分'
                target.className='ds_down';
            }

        }
    }

}



game.init()


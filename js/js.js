window.onload = function(){
	var button = document.getElementById('chaxun');
	button.onclick = function(){
		var kh = document.getElementById('kh');
		var roommate = document.getElementById('sheyou');
		var num = kh.value;
		var xhr=new XMLHttpRequest();
		var url='https://api.youthol.cn/api/newstudent/?num='+num;
		// var url = 'http://localhost/youthAPI/public/api/newstudent?num='+num;
		console.log(url)
		xhr.open('get',url,true);
		$.showLoading("查询中...");
		xhr.onreadystatechange=function () {
			if(xhr.readyState==4)
			{
				if(xhr.status==200)
				{
					result=xhr.responseText;
					result = JSON.parse(result);
					console.log(result)
					document.getElementById('name').innerHTML=result['name'];
					document.getElementById('sdut_id').innerHTML=result['sdut_id'];
					document.getElementById('class').innerHTML=result['class'];
					document.getElementById('major').innerHTML=result['major'];
					document.getElementById('college').innerHTML=result['college'];
					document.getElementById('school').innerHTML=result['school'];
					document.getElementById('dormitory').innerHTML=result['dormitory'];
					document.getElementById('room').innerHTML=result['room'];
					document.getElementById('bed').innerHTML=result['bed'];
					roommate.innerHTML = '<div class="weui-cells__title">我的舍友</div>';
					for(var i in result['roommate']){
						roommate.innerHTML += '<a class="weui-cell weui-cell_access open-popup" href="javascript:;" data-target="#popup'+ i +'"><div class="weui-cell__bd"><p>'+result['roommate'][i].name+'</p></div><div class="weui-cell__ft">'+result['roommate'][i].bed+'号床</div></a><div id="popup'+i+'" class="weui-popup__container popup-bottom" style="display: none;"><div class="weui-popup__overlay"></div><div class="weui-popup__modal"><div class="toolbar"><div class="toolbar-inner"><a href="javascript:;" class="picker-button close-popup">关闭</a><h3 class="title">'+result['roommate'][i].name+'</h3></div></div><div class="weui-panel"><div class="weui-panel__hd"></div><div class="weui-panel__bd"><div class="weui-media-box weui-media-box_text"><h4 class="weui-media-box__title">班级：'+result['roommate'][i].class+'</h4><p class="weui-media-box__desc">'+result['roommate'][i].bed+'号床</p></div></div></div></div></div></div>'
					}
					document.getElementsByClassName('hidden')[0].style.display = 'block';
				}
				else
				{
					roommate.innerHTML = '';
					document.getElementsByClassName('hidden')[0].style.display = 'none';
					alert('查询数据为空，请检查输入信息是否正确:(');
				}
			}
		}
		$.hideLoading();
		xhr.send(null);
		
	}
}


function scoreToggle() {
	$("#sheyou").toggle('show');
// 	if(document.getElementsByClassName('hidden')[0].style.display=='block'){
// 		document.getElementsByClassName('hidden')[0].style.display = 'none';
// 	}else{
// 		document.getElementsByClassName('hidden')[0].style.display = 'block';
// 	}
}

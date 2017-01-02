let frm=document.forms[0];
frm.onsubmit=function(){
	let xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(this.readyState==4){
			frm.rs.value=this.responseText;
			if(this.status==200){
				try{
					let obj=JSON.parse(this.responseText);
					window.localStorage.setItem('token', obj.msg);
				}catch(err){
					frm.rs.value+='\n'+err;
				}
			}
		}
	};
	xhr.open('post', 'api/reg');
	xhr.setRequestHeader('content-type', 'application/json; charset=utf-8');
	xhr.send(JSON.stringify({"email":this.email.value, "pwd":this.pwd.value}));
	return false;
};

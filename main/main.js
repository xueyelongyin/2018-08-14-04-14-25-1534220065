module.exports = function main(s) {
	
	var number=new Array();
	var vSt='';//Final result;
	var vSt1='';//Final result1;
	var vSt2='';//Final result2;
	var vSt3='';//Final result3;
	var tmp1='';//tem result
	var tmp2='';//tem result
	var tmp3='';//tem result
	for(i=0;i<s.length;i++){
			number.push(s.charAt(i));
	}
	
	for(i=0;i<number.length;i++){
		switch (number[i]){
			case "0":
				tmp1='._.';
				tmp2='|.|';
				tmp3='|_|';
				break;
			case "1":
				tmp1='...';
				tmp2='..|';
				tmp3='..|';
				break;	
			case "2":
				tmp1='._.';
				tmp2='._|';
				tmp3='|_.';
				break;	
			case "3":
				tmp1='._.';
				tmp2='._|';
				tmp3='._|';
				break;	
			case "4":
				tmp1='...';
				tmp2='|_|';
				tmp3='..|';
				break;	
			case "5":
				tmp1='._.';
				tmp2='|_.';
				tmp3='._|';
				break;	
			case "6":
				tmp1='._.';
				tmp2='|_.';
				tmp3='|_|';
				break;	
			case "7":
				tmp1='._.';
				tmp2='..|';
				tmp3='..|';
				break;	
			case "8":
				tmp1='._.';
				tmp2='|_|';
				tmp3='|_|';
				break;	
			case "9":
				tmp1='._.';
				tmp2='|_|';
				tmp3='..|';
				break;	
			default:
		}
		if(i!=0){
			vSt1=vSt1+' '+tmp1;
			vSt2=vSt2+' '+tmp2;
			vSt3=vSt3+' '+tmp3;
		}else{
			vSt1=vSt1+tmp1;
			vSt2=vSt2+tmp2;
			vSt3=vSt3+tmp3;
		}
	}
	
    vSt=vSt1+'\n'+vSt2+'\n'+vSt3+'\n';
	console.log(vSt);
    return s;
};
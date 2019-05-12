/**Created by wyq on 2019/5/6*/
//  转换时间戳

import {fillzero} from './fillzero'
export  default (date)=> {
	//data 是整数，否则要parseInt转换 且非字符
	date = new Date(date*1);
	var hours = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	var year = date.getFullYear();
	var mon = date.getMonth();
	var data = date.getDate();
	return `${year}年${fillzero(mon)}月${fillzero(data)}日 ${fillzero(hours)}:${fillzero(min)}:${fillzero(sec)}`
}

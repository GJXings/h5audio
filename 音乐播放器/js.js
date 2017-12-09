var musiclists = [{
	"id": "1",
	"name": "亲爱的",
	"singer": "潘玮柏",
	"duration": "04:10",
	"src": "audio/亲爱的.mp3",
	"images": "img/qinaide.jpg"
}, {
	"id": "2",
	"name": "其实",
	"singer": "薛之谦",
	"duration": "04:02",
	"src": "audio/其实.mp3",
	"images": "img/qishi.jpg"
}, {
	"id": "3",
	"name": "好想就这样",
	"singer": "王缇",
	"duration": "04:19",
	"src": "audio/好想就这样.mp3",
	"images": "img/haoxiangjiuzheyang.jpg"
}, {
	"id": "4",
	"name": "一直",
	"singer": "王筝",
	"duration": "03:51",
	"src": "audio/一直.mp3",
	"images": "img/yizhi.jpg"
}, {
	"id": "5",
	"name": "爱着你",
	"singer": "龚淑均",
	"duration": "04:30",
	"src": "audio/爱着你.mp3",
	"images": "img/aizheni.jpg"
}, {
	"id": "6",
	"name": "哪怕",
	"singer": "莫文蔚",
	"duration": "05:14",
	"src": "audio/哪怕.mp3",
	"images": "img/napa.jpg"
}, {
	"id": "7",
	"name": "只有一次",
	"singer": "叶倩文",
	"duration": "02:32",
	"src": "audio/只有一次.mp3",
	"images": "img/zhiyouyici.jpg"
}, {
	"id": "8",
	"name": "而已",
	"singer": "gogo",
	"duration": "04:12",
	"src": "audio/而已.mp3",
	"images": "img/eryi.jpg"
}, {
	"id": "9",
	"name": "我再也不会离开你1111",
	"singer": "完美生活",
	"duration": "02:38",
	"src": "audio/我再也不会离开你.mp3",
	"images": "img/wozaiyebuhuilikaini.jpg"
}, ]
var music1 = document.getElementsByClassName("right")[0];
var musicul = music1.children[0];
var lis = musicul.children;
var tu = document.getElementsByClassName("tu")[0];
var img = tu.children[0]
var singname = document.getElementsByClassName("zi1")[0];
var singer = document.getElementsByClassName("zi2")[0];
var tiao1 = document.getElementsByClassName("tiao1")[0];
var tiao = document.getElementsByClassName("tiao")[0];
var b1 = document.getElementsByClassName("b1")[0];
var buttom = document.getElementsByClassName("buttom")[0];
var bntplay = document.getElementById("p2")
var backward = document.getElementById("p1")
var forward = document.getElementById("p3")
var random = document.getElementById("ran")
var list = document.getElementById("ls")
var heart = document.getElementById("ht")
var off = document.getElementById("off")
var up = document.getElementById("up")
var time = document.getElementById("date")
var play = document.getElementsByTagName("audio")[0]
var box = document.getElementsByClassName("box")[0]
var timer;
var timer1;

function lodelist() {
	for(var i = 0; i < musiclists.length; i++) {
		var music = musiclists[i]
		var li = document.createElement("li")
		musicul.appendChild(li)
		var span = document.createElement("span")
		li.appendChild(span)
		var p = document.createElement("p")
		li.appendChild(p)
		span.innerHTML = music.name
		p.innerHTML = music.duration
		li.setAttribute("index", i)

		li.onclick = function() {
			var index = this.getAttribute("index")
			this.children[0].style.color = "green"
			play_index = index;

			for(var j = 0; j < musiclists.length; j++) {
				lis[j].children[0].style.color = "#fff"
			}

			this.children[0].style.color = "green"
			lodemusics();
			play.play();
			bntplay.setAttribute("class", "fa fa-pause")
		}
	}
}
bntplay.onclick = function() {
	if(play.paused) {
		play.play();
		bntplay.setAttribute("class", "fa fa-pause")

	} else {
		play.pause();
		bntplay.setAttribute("class", "fa fa-play")
	}
}

function lodemusics() {
	var music = musiclists[play_index]
	img.src = music.images
	singer.innerHTML = music.singer
	singname.innerHTML = music.name
	play.src = music.src
}
lodelist()
var play_index = 0;
backward.onclick = function() {

	if(flags == 0) {
		var randoms = parseInt(Math.random() * musiclists.length)
		play_index = randoms

	} else if(flags == 1) {
		play_index = play_index + 1

	}
	if(play_index == 0) {
		play_index = musiclists.length - 1
	} else {
		play_index--;
	}
	for(var i = 0; i < musiclists.length; i++) {
		lis[i].children[0].style.color = "#fff"
	}

	lis[play_index].children[0].style.color = "green"

	lodemusics()
	play.play();
	bntplay.setAttribute("class", "fa fa-pause")

}
forward.onclick = function() {
	if(flags == 0) {
		var randoms = parseInt(Math.random() * musiclists.length)
		play_index = randoms

	} else if(flags == 1) {
		play_index = play_index - 1
	}
	if(play_index == musiclists.length - 1) {
		play_index = 0
	} else {
		play_index++;
	}
	for(var i = 0; i < musiclists.length; i++) {
		lis[i].children[0].style.color = "#fff"
	}

	lis[play_index].children[0].style.color = "green"
	lodemusics();
	play.play();
	bntplay.setAttribute("class", "fa fa-pause")
}
timer = window.setInterval(js, 100)

function js() {
	clearInterval(timer1)

	time.innerHTML = time2(play.currentTime);

	var currenValue = play.currentTime / play.duration
	b1.style.width = currenValue * 100 + "%"
}
timer1 = setInterval(djs, 100)

function djs() {
	clearInterval(timer)
	var times = musiclists[play_index].duration;
	var shu = time3(times);
	time.innerHTML = time2(shu - play.currentTime);
	//   	
	var currenValue = play.currentTime / play.duration
	b1.style.width = currenValue * 100 + "%"
}

off.onclick = function() {
	play.volume = 0;
	tiao1.style.width = "0";
}
up.onclick = function() {
	play.volume = 1;
	tiao1.style.width = "100%";

}
tiao.onclick = function(event) {
	var e = event || window.event
	play.volume = (e.clientX - this.offsetLeft) / this.offsetWidth;
	tiao1.style.width = play.volume * 100 + "%";
}
buttom.onclick = function(event) {
	var e = event || window.event
	play.process = (e.clientX - this.offsetLeft) / this.offsetWidth;
	play.currentTime = play.process * play.duration
}
var flag = 1
list.onclick = function() {
	if(flag) {
		musicul.style.display = "none"
		flag = 0;
		box.style.width = "350px"
		this.style.color = "#666"
	} else {
		musicul.style.display = "block"
		flag = 1;
		box.style.width = "500px"
		this.style.color = "#ddd"

	}
}
var flags = 0;
random.onclick = function() {
	if(flags == 0) {
		flags = 1;
		this.className = "fa fa-recycle"

		this.style.color = "#ddd"
	} else if(flags == 1) {
		this.className = "fa fa-bicycle"
		flags = 2;
		this.style.color = "#ddd"

	} else {
		this.className = "fa fa-random"
		flags = 0;

	}
}
var flag1 = 1
time.onclick = function() {
	if(flag1 == 1) {
		flag1 = 0
		clearInterval(timer)
		time.innerHTML = musiclists[play_index].duration
		timer1 = window.setInterval(djs, 100)

	} else {
		flag1 = 1
		clearInterval(timer1)

		timer = window.setInterval(js, 100)

	}

}

function time3(time) {
	var seond = Number(time.substring(time.indexOf(":") + 1))
	var minute = Number(time.substring(0, 2)) * 60
	var sum = seond + minute

	return sum
}

function time2(time) {
	if(time >= 3600) {
		var hour = parseInt(time / 3600)
		var minute = parseInt(time % 3600 / 60)
		var second = parseInt(time % 3600 % 60);
		hour = hour < 10 ? "0" + hour : hour;
		minute = minute < 10 ? "0" + minute : minute;
		second = second < 10 ? "0" + second : second;
		return hour + ":" + minute + ":" + second
	} else {

		var minute = parseInt(time / 60)
		var second = parseInt(time % 60)
		minute = minute < 10 ? "0" + minute : minute;
		second = second < 10 ? "0" + second : second;
		return minute + ":" + second;
	}

}

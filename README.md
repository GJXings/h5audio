H5音频播放器详情
此demo没有借助框架，插件。基于H5和原生JS开发。
由于早期写的h5视频播放器，代码规范不是特别严格，显得有点low，后期请关注00思想版本的demo 
动态加载播放列表
载入歌曲信息 
改变专辑图片
left_photo.src = music.images;
改变歌曲名 list_title.innerHTML = music.name;
改变歌手名 list_singer.innerHTML = music.singer;
改变歌曲路径 player.src = music.src; }

功能模块、

播放,暂停，重播歌曲 
上一 首 下一首 
静音 最大音
时间，倒计时
随机，循环，单曲播放 
通过滑块控制音量大小
通过滑块控制音乐进度 
显示隐藏播放列表
列表渲染

初始化 
载入播放列表 loadPlayList();
播放序号 var play_index=0;
初始音量 player.volume=0.5;
初始化显示播放列表 当flag为1的时候,表示列表显示(当前状态) 
当flag为0的时候,表示列表隐藏(当前状态) var flag=1;

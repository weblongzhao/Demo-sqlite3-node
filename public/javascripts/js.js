$("#submit").click(function(){
    var text = $("#text").val();
    console.log(text) ;
    $.post("/api/a",{
        text:text,
        username: "longzhao"
    },function(data,status){
        console.log(data,status)
    });
    location.reload();
});

function getComment(){
    $.get("/api/get",function(data){
        console.log(data,typeof data)
        data.forEach(function(item,index){
            const text = item.text;
            const time = new Date(item.updatedAt);
            const min = time.getMinutes()<=9?'0'+time.getMinutes():time.getMinutes();
            const hour = time.getHours()<=9?'0'+time.getHours():time.getHours();

            /*添加评论留言*/
            const txt=`
          <li class="clearfix item">
      <img class="avatar" src="http://p4ik510sj.bkt.clouddn.com/18-7-12/67501490.jpg" alt="">
      <div class="content">
        <div class="title">
          <span class="nick">访客</span>
          <span class="time">${time.getFullYear()}/${time.getMonth()+1}/${time.getDate()} ${hour}:${min}</span>
        </div>
        <p>
          ${text}
        </p>
      </div>
    </li>
        ` ;
            //添加评论
            $("#comment-box").append(txt);
            console.log(txt)
            console.log(text,time.getFullYear(),time.getMonth()+1,time.getDate(),time.getMilliseconds())
        })
        // $("#comment-box")
    });
}

getComment();







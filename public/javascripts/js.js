$("#submit").click(function(){
    $.post("/api/submit",function(data){
        console.log(data)
    })
})
        $(document).ready(function(){
            $("#btn1").click(function(){
                alert("Button clicked")
            })

            $("#btn2").mouseenter(function(){
                $(this).css({"background":"white","color":"black"})
            })
            $("#btn2").mouseleave(function(){
                $(this).css({"background":"black","color":"white"})
            })

            $("#btn2").mousedown(function(){
                $(this).css({"background":"green"})
            })

            $("#btn").click(function(){
                $("#box1").hide()
            })

            $("#btn3").click(function(){
                $("#box2").toggle(1000)
            })

            $("#btn4").mouseenter(function(){
                $("#box3").fadeToggle(1000)
            })


            // $("#btn2").mouseenter(function(){
            //     $(this).css({"background":"red"})
            // })

            // $("#btn2").mouseenter(function(){
            //     $(this).css({"background":"red"})
            // })
        })

    </script>
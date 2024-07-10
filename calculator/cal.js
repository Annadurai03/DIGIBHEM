var output = document.getElementById("output-screen");

        function display(num){
            output.value += num;
                }
                function clr(){
                    output.value = "";
                    
                }
                function del(){
                    output.value = output.value.slice(0,-1);
                }
                function calculate(){
                    try{
                        output.value = eval(output.value);
                    }
                    catch(err)
                    {
                        alert("Invalid")
                    }
               
                    
                }
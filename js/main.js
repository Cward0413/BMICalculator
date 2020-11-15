$(document).ready(function (){

        var myRules =
            {
                weight: {
                    required: true,
                    min: 88,
                    max: 353,
                    digits: true
                },
                height: {
                    required: true,
                    min: 59,
                    max: 79,
                    digits: true
                }
            };

        var myMessages =
            {
                weight: {
                    required: "This field must be filled",
                    min: 'Please enter a number 88-353',
                    max: 'Please enter a number 88-353',
                    digits: "Please enter a number"
                },
                height: {
                    required: "This field must be filled",
                    min: 'Please enter a number 59-79',
                    max: 'Please enter a number 59-79',
                    digits: "Please enter a number"
                }
            };

        //add event handlers
        $("form").validate(
            {
                submitHandler: calcBMI,
                rules: myRules,
                messages: myMessages
            }
        );

        //all other functions (program logic)


        function calcBMI(){
            event.preventDefault();

            //get user height and weight
            var uweight = parseFloat($("#weight").val());
            var uheight = parseFloat($("#height").val());

            var mheight = uheight**2;

            //calc bmi
            var bmi = (uweight / mheight) * 703;

            category = 0;
            if(bmi < 15){
                category = 'Very severely underweight';
            }
            else if(bmi < 16){
                category = 'Severely underweight';
            }
            else if(bmi < 18.5){
                category = 'Underweight';
            }
            else if(bmi < 25){
                category = 'Normal';
            }
            else if(bmi < 30){
                category = 'Overweight';
            }
            else if(bmi < 35){
                category = 'Moderately Obese';
            }
            else if(bmi < 40){
                category = 'Severely Obese';
            }
            else if(bmi >= 40){
                category = 'Very severely Obese';
            }
            $("#output").text((bmi).toFixed(1));
            $("#category").text(category);

        }
    }
)
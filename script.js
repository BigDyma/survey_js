var ind = 0;
var quiz = [
    {
        question: "Unde veți sărbători sfârșitul carantinei?",
        answer: [
            'La sala de simulatoare',
            'La un antrenament de grup',
            'Antrenament online plus sală de sport',
            'Oriunde, numai să ies din casă'
        ]
    },
    {
        question: "La ce oră puteți face sport?",
        answer: [
            'Dimineața',
            'Ziua',
            'Seara',
            'Oricând, numai să revin odată la sală'
        ]
    },
    {
        question: "Care sunt scopurile Dmneavoastră la sală?",
        answer: [
            'Să slăbesc',
            'Să-mi cresc masa musculară',
            'Tonifiere și reliefare',
            'Să-mi găsesc prieteni noi'
        ]
    },
    {
        question: "Antrenorul Dumneavoastră personal trebuie să fie:",
        answer: [
            'Un bărbat',
            'O femeie',
            'Profesionist în domeniu'
        ]
    }
];

var survey_result = [];

function render_question(i){

    if (i > 0 && i < quiz.length)
    {
        if (!$('#inapoi').length)
             $('.divper').after('<button type="button" id="inapoi" class="btn btn-primary">Inapoi</button>');
    }
    else 
    {
        $('#inapoi').remove();
    }

    var quest = quiz[i].question;
    var ans = quiz[i].answer;
    var question_base = `<div id="question-${i}"></div>`
    $('.divper').append(question_base);

    var ht = `<h3>${quest}</h3></hr>`;

    $(`#question-${i}`).append(ht);
    

    for (var j = 0; j < ans.length; j++)
    {
        var cur_ans = ans[j];
        var item = $(`\
         <div class="form-group  per"> \
        <input type="checkbox" name="fancy-checkbox-danger${j}" id="fancy-checkbox-danger${j}" autocomplete="off" /> \
        <div class=" btn-group "> \
            <label for="fancy-checkbox-danger${j}" class="btn btn-danger${j}" style="color:white; background-color:red;"> \
                <span class=" glyphicon glyphicon-ok"></span> \
                <span> </span> \
            </label> \
            <label for="fancy-checkbox-danger${j}" class="btn btn-default active" style="background-color: white; border-color: white; "> \
                ${cur_ans}\
            </label> \
        </div> \
    </div> `).hide().fadeIn();
    $(`#question-${i}`).append(item);
    }
     console.log(i,  (typeof survey_result[i] != "undefined"))
   if (typeof survey_result[i] != "undefined")
   {
       var saved_ans = survey_result[i].index;
        $(`label[for="fancy-checkbox-danger${saved_ans}"]`)[0].click();
   }
    next_question(i);
}

function next_question(index)
{

    $('#inapoi').click(function(){

        $(`#question-${index}`).fadeOut(359, function() { 
            $(this).remove(); 
            index--;
            render_question(index);
        });
    })
    $('.btn-group').click(function() {

        console.log(this.textContent);
        var temp_obj = {};
        temp_obj.ans = this.textContent;
        temp_obj.index = parseInt(this.childNodes[1].htmlFor.replace(/\D/g,''));
        survey_result[index] = temp_obj;
        $(`#question-${index}`).fadeOut(359, function() { 
            $(this).remove(); 
            index++;
            render_question(index);   
        });
    })
}

render_question(ind);

var ind = 0;
var quiz = [
    {
        question: "question1",
        answer: [
            'answer1',
            'answer2',
            'answer3',
            'answer4'
        ]
    },
    {
        question: "question2",
        answer: [
            'answer1',
            'answer2',
            'answer3',
            'answer4'
        ]
    },
    {
        question: "question3",
        answer: [
            'answer1',
            'answer2',
            'answer3',
            'answer4'
        ]
    }
];

function render_question(i){
    
    var quest = quiz[i].question;
    var ans = quiz[i].answer;
    var question_base = `<div id="question-${i}"></div>`
    $('.divper').append(question_base);

    var ht = `<h3>${quest}</h3></hr>`;

    $(`#question-${i}`).append(ht);
    

    for (var j = 0; j < ans.length; j++)
    {
        var cur_ans = ans[i];
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
    next_question(i);
}

function next_question(index)
{

    $('.btn-group').click(function() {
        $(`#question-${index}`).fadeOut(359, function() { 
            $(this).remove(); 
            index++;
            render_question(index);   
        });
    })
}

render_question(ind);

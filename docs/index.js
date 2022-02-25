let res = [];

async function getQuestions() {

    let difficulty = document.getElementById("difficulty").value;
    let number = document.getElementById("number").value;
    let url = "https://opentdb.com/api.php?amount="+number+"&difficulty="+difficulty+"&type=boolean";
    let response = await fetch(url);

    if (response.ok){
    let resu = await response.json();
    res = resu.results;
    for (let i = 0; i < res.length; i++) {
      var d1 = document.getElementById('c1');
      let question=res[i].question;
      d1.insertAdjacentHTML('beforeend', '<div id='+i+'>'+question+'</div><br><form><input type="radio" id="true'+i+'" name="answer" value="True"><label>True</label><br><input type="radio" id="false'+i+'" name="answer" value="False"><label>False</label></form><br><br>');
    }
    console.log(res);
    d1.insertAdjacentHTML('beforeend', '<br><br><input type="button" onclick="return validateAnswers()" value="Validate Answers"/>');

    }
    return 0;

}

async function validateAnswers(){
    let correctAnswers=0;
    for (let i = 0; i < res.length; i++) {
          let btrue = document.getElementById("true"+i).checked;
          let bfalse = document.getElementById("false"+i).checked;
          console.log(btrue);
          console.log(bfalse);
          if (res[i].correct_answer=="True" && btrue==true){
            correctAnswers+=1;
          }
          if (res[i].correct_answer=="False" && bfalse==true){
                      correctAnswers+=1;
          }
    }
    var d2 = document.getElementById('c2');
    d2.insertAdjacentHTML('beforeend', 'You answered correctly ' + correctAnswers + ' questions');

    return 0;
}

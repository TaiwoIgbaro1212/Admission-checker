let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let postjamb = document.getElementById("postjamb");
let sitting = document.getElementById("sitting");
let jamb = document.getElementById("jamb");
let candEnglish = document.getElementById("cand-Eng");
let candMaths = document.getElementById("cand-Maths");
let candSubj1 = document.getElementById("cand-Subj1");
let candSubj2 = document.getElementById("cand-Subj2");
let candSubj3 = document.getElementById("cand-Subj3");
let age = document.getElementById("age");
let state = document.getElementById("state");

function Person(fname, lname, age, state, jamb, sitting, postjamb) {
  this.firstName = fname;
  this.lastName = lname;
  this.age = age;
  this.state = state;
  this.utmeScore = parseInt(jamb.value);
  this.oneSitting = parseInt(sitting.value);
  this.oLevel = [
    candEnglish.value,
    candMaths.value,
    candSubj1.value,
    candSubj2.value,
    candSubj3.value,
  ];
  this.oLevelGrade = this.oLevel.map((grade) => {
    switch (grade) {
      case "A1":
        return 10;
      case "B2":
        return 9;
      case "B3":
        return 8;
      case "C4":
        return 7;
      case "C5":
        return 6;
      case "C6":
        return 5;
      case "D7":
        return 4;
      case "E8":
        return 3;
      case "F9":
        return 0;
      default:
        return -1;
    }
  });

  this.passedAllCourses = this.oLevelGrade.every((score) => {
    return score >= 5;
  });
  this.putmeScore = parseInt(postjamb.value);

  console.log(this.oLevelGrade);
  this.totalScore = this.oLevelGrade.reduce((a, b) => a + b);
  console.log(this.totalScore);
  this.oLevelTotalScore = (this.totalScore / 50) * 30;

  //     // UTME
  this.finalUtme = this.utmeScore / 8;

  //     // TOTAL MARK
  parseInt(postjamb.value);
  this.finalScore = Math.round(
    this.finalUtme + this.putmeScore + this.oLevelTotalScore
  );

  this.verify = () => {
    if (this.utmeScore < 180 || this.oneSitting > 1 || this.putmeScore < 10) {
      document.getElementById("display").innerHTML = "You're disqualified";
      console.log("You're disqualified");
    } else if (this.oLevel < 5) {
      document.getElementById("display").innerHTML = "Disqualified";
    } else if (this.finalScore >= 80 && this.finalScore <= 100) {
      document.getElementById("display").innerHTML =
        "Congratulations! Qualified on Merit list";
    } else if (this.finalScore >= 75 && this.finalScore < 80) {
      document.getElementById("display").innerHTML =
        "Congratulations! Qualified on Concessionary list";
      console.log("Congratulations! Qualified on Concessionary list");
    } else if (this.finalScore >= 65 && this.finalScore <= 75) {
      document.getElementById("display").innerHTML =
        "Congratulations! Qualified for Catchment";
      console.log("Congratulations! Qualified for Catchment");
    } else if (this.finalScore >= 60 && this.finalScore <= 65) {
      document.getElementById("display").innerHTML =
        "Congratulations! Qualified on VC'S list";
    } else if (!this.passedAllCourses) {
      document.getElementById("display").innerHTML = "You are Disqualified";
      console.log("You are Disqualified");
    } else {
      document.getElementById("display").innerHTML = "You are Disqualified";
      console.log("You are Disqualified");
    }
    document.getElementById("display").style.display = "flex";
  };
}

function finalMark() {
  let newCandidate = new Person(
    fname.value,
    lname.value,
    age,
    state,
    jamb,
    sitting,
    postjamb
  );
  console.log(newCandidate);
  newCandidate.verify();
}

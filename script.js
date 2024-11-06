function updatecard(){
 document.getElementById("schoolNameval").innerText = 
 document.getElementById("schoolName").value;

 document.getElementById("studentNameval").innerText
 = document.getElementById("studentName").value;
 document.getElementById("dateofBirthval").innerText
  = document.getElementById("dateofBirth").value;
  document.getElementById("classval").innerText
   = document.getElementById("class").value;
   document.getElementById("rollnumberval").innerText
    = document.getElementById("rollnumber").value;
    document.getElementById("contactnumberval").innerText
    = document.getElementById("contactNumber").value;
}
 function printidcard(){
    window.print();
 }
/*console.log(
    schoolNametxt,
    studentNametxt,
    dateofBirthtxt,
    Classtxt,
    rollNumbertxt,
    contactNumbertxt
);

}
function claerAll(){
var schoolNametxt = document.getElementById("schoolName").value = "";
var studentNametxt = document.getElementById("studentName").value = "";
var dateofBirthtxt = document.getElementById("dateofBirth").value = "";
var Classtxt = document.getElementById("class").value = "";
var rollNumbertxt = document.getElementById("rollnumber").value = "";
var contactNumbertxt = document.getElementById("contactNumber").value = "";
}*/
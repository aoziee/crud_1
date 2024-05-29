var rollV, nameV, genderV, addressV, emailV;

function readFom() {
  rollV = document.getElementById("roll").value;
  nameV = document.getElementById("name").value;
  genderV = document.getElementById("gender").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("email").value;
  surname1 = document.getElementById("surname").value;
  midname1 = document.getElementById("midname").value;
  Swal.fire("Data Read Succesfully!");
  console.log(rollV, nameV, addressV, genderV, surname1, midname1);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
      email: emailV,
      surname: surname1,
      midname: midname1
    });
    Swal.fire("Data Inserted Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("midname").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("gender").value = snap.val().gender;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("email").value = snap.val().email;
      document.getElementById("surname").value = snap.val().name;
      document.getElementById("midname").value = snap.val().name;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
      email: emailV,
      surname: surname1,
      midname: midname1
    });
    Swal.fire("Data Updated Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("midname").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
    Swal.fire("Data Deleted Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("midname").value = "";
};
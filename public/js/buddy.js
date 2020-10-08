$(document).ready(() => {
  // Getting references to our form and input
  const buddyReqForm = $("form.buddyReq");
  const subjectInput = $("#subject");
  const groupSize = $("#groupSize");
  const notesInput = $("#notes");
  const meetInput = $("#meet");
  const zodiacInput = $("#zodiac");

  // When the signup button is clicked, we validate the subject and group are not blank
  buddyReqForm.on("submit", event => {
    event.preventDefault();
    const buddyData = {
      notes: notesInput.val().trim(),
      subject: subjectInput.val().trim(),
      group: groupSize.val().trim(),
      meet: meetInput.val().trim(),
      zodiac: zodiacInput.val().trim()
    };
    console.log(buddyData);
    // if (!buddyData.notes || !buddyData.subject || !buddyData.group) {
    //   return;
    // }
    // If we have an subject and group, run the signUpUser function
    createBuddy(
      buddyData.notes,
      buddyData.subject,
      buddyData.group,
      buddyData.meet,
      buddyData.zodiac
    );
    subjectInput.val("");
    groupSize.val("");
    notesInput.val("");
    meetInput.val("");
    zodiacInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function createBuddy(notes, subject, group, meet, zodiac) {
    $.post("/api/buddyreq", {
      notes: notes,
      subject: subject,
      group: group,
      meet: meet,
      zodiac: zodiac
    })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});

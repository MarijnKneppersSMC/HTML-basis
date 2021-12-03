function SubmitQuestions(username, password, robot, reason, student)
{
	alert(`Username: ${username}\n`
		+ `Password: ${password}\n`
		+ `You set not a robot to: ${robot}\n`
		+ `Your reason for joining: ${reason}\n`
		+ `As the type of person you are you selected: ${student.options[student.selectedIndex].text}`);
}
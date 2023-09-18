function skillsMember()
{
    var skills = document.getElementById("skills");
    var skill = document.createElement("div");
    skill.className = "skill";
    skill.innerHTML = '<input type="text" name="skills[]" placeholder="Skill" required><input type="text" name="skillLevel[]" placeholder="Skill Level" required><input type="button" value="Remove" onclick="removeSkill(this)">';
    skills.appendChild(skill);
}

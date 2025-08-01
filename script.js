const generateBtn = document.getElementById('generate-btn');
const jobRoleSelect = document.getElementById('job-role');
const questionsDiv = document.getElementById('questions');

generateBtn.addEventListener('click', async () => {
  const role = jobRoleSelect.value;
  questionsDiv.innerHTML = "Loading questions...";

  try {
    const response = await fetch('/api/generate-questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: `Generate 5 technical and behavioral interview questions for a ${role}.`
      })
    });

    const data = await response.json();

    if (data && data.result) {
      questionsDiv.innerHTML = data.result
        .split('\n')
        .map(line => `<p>${line}</p>`)
        .join('');
    } else {
      questionsDiv.innerHTML = "No questions generated.";
    }
  } catch (error) {
    console.error(error);
    questionsDiv.innerHTML = "Failed to fetch questions.";
  }
});

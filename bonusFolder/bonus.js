const getSalaryForDays = (salary, days) => {
  return (salary * days) / 30;
};

const calculateBonus = (years, days, salary) => {
  switch (true) {
    case years < 1:
      return (days * getSalaryForDays(salary, 15)) / 365;
    case years >= 1 && years < 3:
      return getSalaryForDays(salary, 15);
    case years >= 3 && years < 10:
      return getSalaryForDays(salary, 19);
    case years >= 10:
      return getSalaryForDays(salary, 21);
    default:
      break;
  }
};

document.querySelector("#bonus-button").addEventListener("click", () => {
  const salary = document.getElementById("bonus-input-salary").value;
  const years = document.getElementById("bonus-input-years").value;
  const days = document.getElementById("bonus-input-days").value;
  let valid = validateInput(years, days, salary);
  const element = document.getElementById("bonus-result");
  if (valid) {
    document.querySelector("#bonus-button").setAttribute("disabled", true);
    document.querySelector("#bonus-button").style.cursor = "not-allowed";
    setTimeout(() => {
      document.querySelector("#bonus-button").removeAttribute("disabled");
      document.querySelector("#bonus-button").style.cursor = "pointer";
      const result = calculateBonus(years, days, salary);
      element.innerText = result;
    }, 2000);
  } else {
    element.innerText = "wrong input fields";
  }
});

const validateInput = (years, days, salary) => {
  if (salary < 0 || !salary || isNaN(salary)) {
    alert("Salary must be greater than 0");
    return false;
  }

  if (years < 0 || years > 34 || !years || isNaN(years)) {
    alert("Years must be at least 0 and less than 35");
    return false;
  }

  if (days < 0 || days >= 365 || !days || isNaN(days)) {
    alert("Days must be 0 or greater and less than 365");
    return false;
  }
  return true;
};

console.log("bonus");
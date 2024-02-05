
/* ------------------------------------------------------------------------------------*/
/*                        PATIENT RECEPTION PRCESS                                
*/

// phq radio buttons
const phq1radioButtons = document.querySelectorAll('input[name="phq-4-radio-1"]');
const phq2radioButtons = document.querySelectorAll('input[name="phq-4-radio-2"]');
const phq3radioButtons = document.querySelectorAll('input[name="phq-4-radio-3"]');
const phq4radioButtons = document.querySelectorAll('input[name="phq-4-radio-4"]');

// gcp 
const gcp1NumberField = document.getElementById("gcp1");
const gcp2SelectField = document.getElementById("gcp2");
const gcp3SelectField = document.getElementById("gcp3");
const gcp4SelectField = document.getElementById("gcp4");
const gcp5SelectField = document.getElementById("gcp5");
const gcp6SelectField = document.getElementById("gcp6");
const gcp7SelectField = document.getElementById("gcp7");
const gcp8SelectField = document.getElementById("gcp8");

/* ------------------------------------------------------------------------------------*/
/*                              UI elements                                         
*/

const symptomsHeadline = document.getElementsByClassName("symptom");

const tabButton1 = document.getElementById("tab-button-1");

const tabButton2 = document.getElementById("tab-button-2");

const tabButton3 = document.getElementById("tab-button-3");

const printButton = document.getElementById('print-button');

/* ------------------------------------------------------------------------------------*/
/* diagnosis data */ 

const diagnosisData = {
  painBasedAnamnesis: {
    class: '',
    symptoms: [],
  },
  painBasedDiagRight: {
    diagnoses: [],
    symptoms: [],
  },
  painBasedDiagLeft: {
    diagnoses: [],
    symptoms: [],
  },
  intraArticularAnamnesis: {
    class: '',
    symptoms: [],
  },
  intraArticularRight: {
    diagnoses: [],
    symptoms: [],
  },
  intraArticularLeft: {
    diagnoses: [],
    symptoms: [],
  },
  degDysAnamnesis: {
    class: '',
    symptoms: [],
  },
  degDysRight: {
    diagnoses: [],
    symptoms: [],
  },
  degDysLeft: {
    diagnoses: [],
    symptoms: [],
  },
};

/* ------------------------------------------------------------------------------------*/
/*                          navbar alignment                                           */

const navbarSpaceRight = document.getElementById("navbar-space-right");

const homeButton = document.getElementById("home-button");

const navbarDropdown1 = document.getElementById("navbar-dropdown1");

navbarSpaceRight.style.width = homeButton.offsetWidth - navbarDropdown1.offsetWidth;

/* ------------------------------------------------------------------------------------*/
/*                              UI functionality                                       
*/


printButton.addEventListener('click', printPrintableContent);

tabButton1.addEventListener('click', tabButton1Event);

tabButton2.addEventListener('click', tabButton2Event);

tabButton3.addEventListener('click', tabButton3Event);


function tabButton1Event() {
  // appearence
  if (tabButton1.className.includes("active")) {
    return;
  }
  tabButton1.className += " active";
  tabButton2.className = tabButton2.className.replace("active", '');
  tabButton3.className = tabButton3.className.replace("active", '');

  // functionality 
  document.getElementById("patientForm").style.display = "block";
  document.getElementById("examination").style.display = "none";
  document.getElementById("diagnosis").style.display = "none";
  document.getElementById("navbar-dropdown2").style.display = "none";
  document.getElementById("navbar-dropdown1").style.display = "block";
}

function tabButton2Event() {
  // appearence
  tabButton1.className = tabButton1.className.replace("active", '');
  if (!tabButton2.className.includes("active")) {
    tabButton2.className += " active";
  }
  tabButton3.className = tabButton3.className.replace("active", '');

  // functionality 
  document.getElementById("patientForm").style.display = "none";
  document.getElementById("examination").style.display = "block";
  document.getElementById("diagnosis").style.display = "none";
  document.getElementById("navbar-dropdown2").style.display = "none";
  document.getElementById("navbar-dropdown1").style.display = "block";
}

function tabButton3Event() {
  // appearence
  tabButton1.className = tabButton1.className.replace("active", '');
  tabButton2.className = tabButton2.className.replace("active", '');
  if (!tabButton3.className.includes("active")) {
    tabButton3.className += " active";
  }

  // functionality
  document.getElementById("patientForm").style.display = "none";
  document.getElementById("examination").style.display = "none";
  document.getElementById("diagnosis").style.display = "block";
  document.getElementById("navbar-dropdown2").style.display = "block";
  document.getElementById("navbar-dropdown1").style.display = "none";
}


/* -------------------------------- print / export --------------------------------------*/

function printPrintableContent() {
  window.print();
}


/* ------------------------------------------------------------------------------------*/
/*                              State management         
*/
const phqTotalValueField = document.getElementById("phq-total-value-field");

// patient data
const patientRecordLocal = {};


function setPatientFormDataFromInput() {
  patientRecordLocal['patientFormData'] = {
    1: getSelectedRadioButtonValue(getRadioButtons("answer1")),
    2: {
      years: document.getElementById("answer2_years").value,
      months: document.getElementById("answer2_months").value,
    },
    3: getSelectedRadioButtonValue(getRadioButtons("answer3")),
    4: {
      A: getSelectedRadioButtonValue(getRadioButtons("answer4_A")),
      B: getSelectedRadioButtonValue(getRadioButtons("answer4_B")),
      C: getSelectedRadioButtonValue(getRadioButtons("answer4_C")),
      D: getSelectedRadioButtonValue(getRadioButtons("answer4_D")),
    },
    5: getSelectedRadioButtonValue(getRadioButtons("answer5")),
    6: {
      years: document.getElementById("answer6_years").value,
      months: document.getElementById("answer6_months").value,
    },
    7: {
      A: getSelectedRadioButtonValue(getRadioButtons("answer7_A")),
      B: getSelectedRadioButtonValue(getRadioButtons("answer7_B")),
      C: getSelectedRadioButtonValue(getRadioButtons("answer7_C")),
      D: getSelectedRadioButtonValue(getRadioButtons("answer7_D")),
    },
    8: getSelectedRadioButtonValue(getRadioButtons("answer8")),
    9: getSelectedRadioButtonValue(getRadioButtons("answer9")),
    10: getSelectedRadioButtonValue(getRadioButtons("answer10")),
    11: getSelectedRadioButtonValue(getRadioButtons("answer11")),
    12: getSelectedRadioButtonValue(getRadioButtons("answer12")),
    13: getSelectedRadioButtonValue(getRadioButtons("answer13")),
    14: getSelectedRadioButtonValue(getRadioButtons("answer14")),
    15: {
      1: getSelectedRadioButtonValue(phq1radioButtons),
      2: getSelectedRadioButtonValue(phq2radioButtons),
      3: getSelectedRadioButtonValue(phq3radioButtons),
      4: getSelectedRadioButtonValue(phq4radioButtons),
    },
    16: gcp1NumberField.value,
    17: gcp2SelectField.value,
    18: gcp3SelectField.value,
    19: gcp4SelectField.value,
    20: gcp5SelectField.value,
    21: gcp6SelectField.value,
    22: gcp7SelectField.value,
    23: gcp8SelectField.value,
  }
}


function disableInputFields() {
  const patientFormElement = document.getElementById("patientForm");
  const inputElements = patientFormElement.getElementsByTagName("input");
  const selectElements = patientFormElement.getElementsByTagName("select");
  for (const inputElement of inputElements) {
    inputElement.setAttribute("disabled", "");
  }
  for (const selectElement of selectElements) {
    selectElement.setAttribute("disabled", "");
  }
}


/* ------------------------------------------------------------------------------------*/
/*                        EXAMINATION PROCESS                            
*/

/* --------- UI functionality ------------ */

/* -- whole column button functionality -- */
const radioCheckboxes = examination.querySelectorAll('input[type=radio]');
const radioGroupNames = new Set();
for (const radio of radioCheckboxes) {
  // will only be added if the set does not contain the name already
  radioGroupNames.add(radio.name);
}

// all the table radio buttons stored in table.columns for each table
const tables = {};
for (const name of radioGroupNames) {
  const tableName = extableToTableName(name);
  if (tableName !== null) {
    const colIndex = extableGetCol(name);
    if (colIndex !== null) {
      if (!(tableName in tables)) {
        tables[tableName] = [];
      }
      if (!(colIndex in tables[tableName])) {
        tables[tableName][colIndex] = [];
      }
    }
  }
}

for (const radio of radioCheckboxes) {
  const tableName = extableToTableName(radio.name);
  if (tableName !== null) {
    const colIndex = extableGetCol(radio.name);
    if (colIndex !== null) {
      tables[tableName][colIndex].push(radio);
    }
  }
}


// all the table radio buttons with 'name_row_column' format
const tableRadioColumns = {}
for (const name of radioGroupNames) {
  //const match = name.match(regex);
  const colName = extableReplaceStringRow(name, "col");
  if (colName !== null) {

    if (!(colName in tableRadioColumns)) {
      tableRadioColumns[colName] = {
        overall: null,
        col: [],
      };

    }

  }
}

var changeRadioEvent = new Event('change');

for (const radio of radioCheckboxes) {
  const colName = extableReplaceStringRow(radio.name, "col");
  if (colName !== null) {

    tableRadioColumns[colName].col.push(radio);

    var overallRadio = null;
    const overallRadioId = extableReplaceStringRow(radio.name, 'overall');
    if (overallRadioId !== null) {
      overallRadio = document.getElementById(overallRadioId);
    }

    if (overallRadio !== null) {
      tableRadioColumns[colName].overall = overallRadio;
    }
  }
}




// disable table radio buttons functionality
for (tableName in tables) {
  // skip question 8
  const skip = [8];
  if (skip.some(i => tableName.includes(i))) {
    continue;
  }
  // initialize disabled state
  const table = tables[tableName];
  let start = 0;
  // special case for question 6, 7
  if (tableName.includes('6')) {
    start = 2;
  }
  else if (tableName.includes('7')) {
    start = 1;
  }
  for (let j = 0; j < table[start].length; j++) {
    const radio = table[start][j];
    const id = radio.id.slice(-1);
    if (id == 0) {
      // set table row disabled
      for (let i = start + 1; i < table.length; i++) {
        if (j < table[i].length) {
          table[i][j].setAttribute("disabled", "");
          table[i][j + 1].setAttribute("disabled", "");
        }
      }
    }
  }
}
for (tableName in tables) {
  // skip question 6,8
  const skip = [8];
  if (skip.some(i => tableName.includes(i))) {
    continue;
  }
  const table = tables[tableName];
  // check if first column is "No", then the other ones are disabled
  let start = 0;
  // special case for question 6, 7
  if (tableName.includes('6')) {
    start = 2;
  }
  else if (tableName.includes('7')) {
    start = 1;
  }
  for (let j = 0; j < table[start].length; j++) {
    const radio = table[start][j];
    radio.addEventListener('change', () => {
      const id = radio.id.slice(-1);
      if (id == 0) {
        if (radio.checked) {
          // set table row disabled
          for (let i = start + 1; i < table.length; i++) {
            if (j < table[i].length) {
              table[i][j].setAttribute("disabled", "");
              table[i][j + 1].setAttribute("disabled", "");
              if (table[i][j + 1].checked) {
                table[i][j + 1].checked = false;
              }
              table[i][j].checked = true;
            }
          }
        }
      }
      else if (id == 1) {
        // remove table row disabled
        for (let i = 1; i < table.length; i++) {
          if (j < table[i].length) {
            table[i][j].removeAttribute("disabled");
            table[i][j - 1].removeAttribute("disabled");
          }
        }
      }
    });
  }
}

const radioTables = {};
const radioTableElements = document.getElementsByClassName('radio-table');
for (const table of radioTableElements) {
  const frame = table.getElementsByClassName('frame')[0];
  const contentElement = table.getElementsByClassName('table-content')[0];
  const tableId = contentElement.id;
  const content = tables[tableId];
  const customWarning = table.getElementsByClassName('custom-warning')[0];
  const customInfo = table.getElementsByClassName('custom-info')[0];
  const frameBg = document.getElementById(`${frame.id}-bg`);
  customInfo.innerHTML = "Untersuchung empfohlen";
  customWarning.innerHTML = "Angaben überprüfen";
  radioTables[tableId] = {
    frame: frame,
    content: content,
    customWarning: customWarning,
    customInfo: customInfo,
    frameBg: frameBg,
  }
}



for (const key in tableRadioColumns) {
  const overallRadio = tableRadioColumns[key].overall;
  const radioCol = tableRadioColumns[key].col;
  for (const radio of radioCol) {
    radio.addEventListener('change', () => {
      
      const id = radio.id;
      for(const key in radioTables) {
        if(id.includes(key)) {
          const table = radioTables[key];
          if(isTableValid(table)) {
            const bg = table.frameBg;
            if(bg.classList.contains('bg-info-subtle')) {
              bg.classList.replace('bg-info-subtle', 'bg-success-subtle')
            }
            if(bg.classList.contains('bg-warning-subtle')) {
              bg.classList.replace('bg-warning-subtle', 'bg-success-subtle');
            }
            table.customInfo.style.display = "none";
            table.customWarning.style.display = "none";
          }
        }
      }
      if(currentExaminationStep == 3) {
        let isValid = validateExaminationSubmit()
        if(isValid) {
          const components = document.getElementsByClassName("examination-input-invalid-warning");
          for(const component of components) {
            component.style.display = "none";
          }
        }
      }
      if (radio.value === "1") {
        overallRadio.checked = false;
      }
    });
  }
  overallRadio.addEventListener('change', () => {
    for (const radio of radioCol) {
      if (radio.value === "0") {
        radio.checked = true;
        radio.dispatchEvent(changeRadioEvent);
      }
    }
  });
}

// event listeners for the radio buttons


/* -- required checkbox groups -- */

const checkGroupsRequired = {};
const checkGroupsRequiredElements = document.getElementsByClassName('check-group-required');
for (const group of checkGroupsRequiredElements) {
  const frame = group.getElementsByClassName('frame')[0];
  const checks = group.querySelectorAll('input[type=checkbox]');
  const checkSelectNone = group.getElementsByClassName('select-none')[0];
  const customWarning = group.getElementsByClassName('custom-warning')[0];
  const customInfo = group.getElementsByClassName('custom-info')[0];
  const frameBg = document.getElementById(`${frame.id}-bg`);
  const checksNormal = [];
  customWarning.innerHTML = "Angabe erforderlich"
  for (const check of checks) {
    if (check !== checkSelectNone) {
      checksNormal.push(check);
    }
  }
  checkGroupsRequired[frame.id] = {
    frame: frame,
    frameBg: frameBg,
    checks: checks,
    checksNormal: checksNormal,
    checkSelectNone: checkSelectNone,
    customWarning: customWarning,
    customInfo: customInfo,
  };
}

// event listeners for the checkboxes
for (key in checkGroupsRequired) {
  const group = checkGroupsRequired[key];
  const checksNormal = group.checksNormal;
  const checks = group.checks;
  const checkSelectNone = group.checkSelectNone;
  const frameBg = group.frameBg;
  const customWarning = group.customWarning;
  // functionality
  for (const check of checksNormal) {
    check.addEventListener('change', () => {
      if (check.checked) {
        checkSelectNone.checked = false;
      }
    });
  }
  checkSelectNone.addEventListener('change', () => {
    for (const check of checksNormal) {
      check.checked = false;
    }
  });
  // validation UI update
  for (const check of checks) {
    check.addEventListener('click', () => {
      // check if group was validated
      if (!frameBg.classList.contains('bg-body-tertiary')) {
        if (check.checked) {
          setFrameBg(frameBg, 'bg-success-subtle');
          customWarning.style.display = 'none';
        }
        let isValid = false;
        for (const check of checks) {
          if (check.checked) {
            isValid = true;
          }
        }
        if (!isValid) {
          setFrameBg(frameBg, 'bg-danger-subtle');
          customWarning.style.display = 'block';
        }
      }
    });
  }
}

// event listener for validation button
const examinationNextButton = document.getElementById("examination-next-button");
const examinationPage2 = document.getElementsByClassName("examination-page-2");
let currentExaminationStep = 1; // current examination step
let preExaminationLeft = {};
let preExaminationRight = {};

examinationNextButton.addEventListener('click', () => {
  let isValidPage1 = true; // Voruntersuchung U1a
  let isValidPage2 = true; // Untersuchung
  const components = document.getElementsByClassName("examination-input-invalid-warning");
  // check if U1a is valid
  for (key in checkGroupsRequired) {
    const group = checkGroupsRequired[key];
    const checks = group.checks;
    let isValid = false;
    for (const check of checks) {
      if (check.checked) {
        isValid = true;
      }
    }
    if (!isValid) {
      setFrameBg(group.frameBg, 'bg-danger-subtle');
      group.customWarning.style.display = 'block';
      isValidPage1 = false; // Voruntersuchung invalid
    }
    else {
      setFrameBg(group.frameBg, 'bg-success-subtle');
      group.customWarning.style.display = 'none';
    }
  }

  // if U1a is valid then proceed to next examination step
  if (currentExaminationStep == 1) {
    if (isValidPage1) {
      validatePreExaminationSubmit(); // show next examination steps
      examinationNextButton.innerHTML = "Diagnosevorschläge nach DC/TMD-Kriterien erstellen"; // change button text
      currentExaminationStep++;     
      for (const elemt of examinationPage2) {
        elemt.style.display = "block";
      }
    }
  }
  
  // step 2 of the examination process
  else if (currentExaminationStep == 2) {
    // check if examination is valid
    isValidPage2 = validateExaminationSubmit();
    if (isValidPage1 && isValidPage2) {
      tabButton3Event();
      getDiagnosis();
      tabButton3.classList.remove("disabled");
      document.getElementById("tab-button-2-arrow").classList.remove("disabled");
      for (const component of components) {
        component.style.display = "none";
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    // if U1a is not valid then scroll to the top
    else if (!isValidPage1) {
      window.scrollTo({ top: 0, left: 0 });
    }
    else if (!isValidPage2) {
      for (const component of components) {
        component.style.display = "block";
      }
      window.scrollTo(0, document.body.scrollHeight);
      currentExaminationStep++;
    }
  }
  // if the second examination step is not valid the second time, then proceed anyway
  else if(currentExaminationStep == 3) {
    tabButton3Event();
    getDiagnosis();
    tabButton3.classList.remove("disabled");
    document.getElementById("tab-button-2-arrow").classList.remove("disabled");
    if (isValidPage1 && isValidPage2) {
      for (const component of components) {
        component.style.display = "none";
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }
});

function checkExaminationInput() {
  let isValid = true;
  for (const component of customNumberInputComponents) {
    const inputs = component.querySelectorAll('input[type=number]')
    for (const input of inputs) {
      if (input.value === "") {
        addCustomInputWarning(component);
        isValid = false;
      }
    }
  }
  return isValid;
}

function validatePreExaminationSubmit() {
  const preExaminationData = getExaminationFormData();
  const examinationFormDataLeft = getExaminationDataSide(preExaminationData, 'L');
  const examinationFormDataRight = getExaminationDataSide(preExaminationData, 'R');
  const U_left = getU(examinationFormDataLeft);
  const U_right = getU(examinationFormDataRight);
  preExaminationLeft = {
    '1a': U_left['1a'],
    '1b': U_left['1b'],
  }
  preExaminationRight = {
    '1a': U_right['1a'],
    '1b': U_right['1b'],
  }

  setPatientFormDataFromInput();
  const SF = getSF(patientRecordLocal.patientFormData);
  phqTotalValueField.innerHTML = SF.phq;
  //const painBasedAnamnesis = getPainBasedAnamnesis(SF);
  //const intraArticularAnamnesis = getIntraArticularAnamnesis(SF);
  //const degDysAnamnesis = getDegDysAnamnesis(SF);
  validatePreExaminationSubmitSide(SF, U_left, 'L');
  validatePreExaminationSubmitSide(SF, U_right, 'R');
}

function validateExaminationSubmit() {
  let isValid = true;
  if(!validateExaminationSubmitSide('L')) {
    isValid = false;
  }
  if(!validateExaminationSubmitSide('R')) {
    isValid = false;
  }
  return isValid
}

function validatePreExaminationSubmitSide(SF, U, side) {
  const pain = SF[1] && SF[3] && (SF[4].A || SF[4].B || SF[4].C || SF[4].D);
  const confirmedMusclePain = pain && (U['1a'][1] || U['1a'][2] || U['1a'][4] || U['1a'][5]);
  const confirmedJointPain = pain && (U['1a'][3]);
  const headPain = SF[5] && (SF[7].A || SF[7].B || SF[7].C || SF[7].D);
  const confirmedHeadPain = headPain && (U['1b'][1] || U['1b'][2]);
  const jawLock = SF[9] && SF[10]; //MPMÖ

  for (const tableId in radioTables) {
    const table = radioTables[tableId];
    if (!tableId.includes(side)) {
      continue;
    }
    if (confirmedMusclePain) {
      if (tableId.includes('4') || tableId.includes('9')) {
        setFrameBg(table.frameBg, 'bg-info-subtle');
        table.customInfo.style.display = 'block';
      }
    }
    if (confirmedJointPain) {
      if (tableId.includes('4') || tableId.includes('5') || tableId.includes('9')) {
        setFrameBg(table.frameBg, 'bg-info-subtle');
        table.customInfo.style.display = 'block';
      }
    }
    if (confirmedHeadPain) {
      if (tableId.includes('4') || tableId.includes('5') || tableId.includes('9')) {
        setFrameBg(table.frameBg, 'bg-info-subtle');
        table.customInfo.style.display = 'block';
      }
    }
    if (!U['1a'][0] || !U['1b'][0]) { // wenn schmerzen vorhandengit 
      if ((tableId.includes('6') || tableId.includes('7'))) {
        setFrameBg(table.frameBg, 'bg-info-subtle');
        table.customInfo.style.display = 'block';
      }
    }
  }
}

function validateExaminationSubmitSide(side) {

  let isValid = true;
  for (const tableId in radioTables) {
    const table = radioTables[tableId];
    if (!tableId.includes(side)) {
      continue;
    }

    if(table.frameBg.classList.contains("bg-info-subtle") || table.frameBg.classList.contains("bg-warning-subtle")) {
      const tableIdSubstr = tableId.substring(0, 1);
      for (const component of customNumberInputComponents) {
        const inputs = component.querySelectorAll('input[type=number]')
        for (const input of inputs) {
          if(input.id.includes(tableIdSubstr)) {
            if (input.value === "") {
              addCustomInputWarning(component);
              isValid = false;
            }
          }
        }
      }
      if (!isTableValid(table)) {
        isValid = false;
        table.frameBg.classList.replace("bg-info-subtle", "bg-warning-subtle");
        table.customWarning.style.display = "block";
        table.customInfo.style.display = "none";
      }
      else {
        table.frameBg.classList.replace("bg-info-subtle", "bg-success-subtle");
        table.frameBg.classList.replace("bg-warning-subtle", "bg-success-subtle");
        table.customWarning.style.display = "none";
        table.customInfo.style.display = "none";
      }
    }
  }
  
  return isValid;
}

function isTableValid(table) {
  const content = table.content;
  let isValid = true;
  for(let i = 0; i < content.length; i++) {
    for(let j = 0; j < content[i].length - 1; j += 2) {
      if(!content[i][j].checked && !content[i][j+1].checked) {
        isValid = false;
      }
    }
  }
  return isValid;
}

const submitAnamnesisButtons = document.getElementsByClassName("anamnesis-submit-button");
for (const button of submitAnamnesisButtons) {

  button.addEventListener('click', () => {
    showAnamnesisSummary();
    disableInputFields();
    tabButton2Event();
    tabButton2.classList.remove("disabled");
    document.getElementById("tab-button-1-arrow").classList.remove("disabled");
    // Reset the scroll position of the document body to the top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const buttonContainers = document.getElementsByClassName("anamnesis-submit-button-div");
    for (const div of buttonContainers) {
      div.style.display = "none";
    }
  });
}


function showAnamnesisSummary() {
  setPatientFormDataFromInput();
  const SF = getSF(patientRecordLocal.patientFormData);
  phqTotalValueField.innerHTML = SF.phq;
  const summaryAnamnesisWarnings = document.getElementsByClassName("summary-anamnesis-warning");
  const summaryAnamnesis = document.getElementsByClassName("summary-anamnesis");
  //const gcsElements = document.getElementsByClassName('gcs-number');
  //const phqElements = document.getElementsByClassName('phq-number');
  const severePatientWarnings = document.getElementsByClassName("severe-patient-warning");
  const summaryAnamnesisInfos = document.getElementsByClassName("summary-anamnesis-info");

  const degree = SF['gcs'].degree;
  for (const element of severePatientWarnings) {
    if (degree >= 3 || SF['phq'] >= 3) {
      let html = `<div class="text-danger">`
      html += `<b>Weitergehende psychosoziale Diagnostik empfohlen </b>`;
      if (degree >= 3 && SF.phq < 3) {
        html += `<br>${degreeInterpretation(degree)} (GCS Grad ${toRomanPseudo(degree)})`;
      }
      else if (degree < 3 && SF['phq'] >= 3) {
        html += `<br>PHQ-4 Wert: ${SF.phq}`;
      }
      else if (SF.phq >= 3 && degree >= 3) {
        html += `<br>${degreeInterpretation(degree)} (GCS Grad ${toRomanPseudo(degree)})<br>PHQ-4 Wert: ${SF.phq}`;
      }
      html += "</div>";
      element.innerHTML = html;
    }
  }
  if (degree >= 3 || SF['phq'] >= 3) {
    for (const warning of summaryAnamnesisWarnings) {
      warning.style.display = "block";
    }
  }
  else {
    for (const warning of summaryAnamnesisWarnings) {
      warning.style.display = "none";
    }
  }

  const anamnesisResults = [];
  if (SF[3] && (SF[4].A || SF[4].B || SF[4].C || SF[4].C)) {
    anamnesisResults.push(
      `Regionaler Schmerz, der durch fuktionelle oder parafunktionelle Kieferbewegungen modifiziert wird.`);
  }
  if (SF[5] && (SF[7].A || SF[7].B || SF[7].C || SF[7].C)) {
    anamnesisResults.push("Kopfschmerzen, die durch Kieferbewegungen, Funktion oder Parafunktion beeinflusst werden");
  }
  if (SF[8]) {
    anamnesisResults.push("Anamnestisch aktuell vorhandenes Kiefergelenk (KG) - Geräusch");
  }
  if (SF[11] && !SF[12]) {
    anamnesisResults.push("Aktuell intermittierende Blockade mit eingeschränkter Mundöffnung");
  }
  if (SF[9]) {
    anamnesisResults.push("Aktuelle oder frühere KG-Blockade mit eingeschränkter Mundöffnung");
  }
  if (SF[10]) {
    anamnesisResults.push("Einschränkung schwer genug, um die Fähigkeit zu Essen zu beeinträchtigen");
  }
  if (SF[13]) {
    anamnesisResults.push("KG-Arretierung oder Hängen bleiben bei weit geöffneter Kieferposition");
  }
  if (SF[14]) {
    anamnesisResults.push("Unfähigkeit den Mund ohne spezielles Umlenken zu schließen");
  }

  let html =
    `<ul class="list-group list-group-flush text-center">`;
  for (const result of anamnesisResults) {
    html +=
      `<li class='list-group-item list-group-item-info'>
      ${result}
    </li>`
  }
  html += `</ul>`;

  for (const element of summaryAnamnesisInfos) {
    element.innerHTML = html;
  }

  if (anamnesisResults.length !== 0) {
    for (const element of summaryAnamnesis) {
      element.style.display = "block";
    }
  }
}



function degreeDefinition(degree) {
  if (degree == 1) {
    return "Geringe Schmerzintensität";
  }
  if (degree == 2) {
    return "Hohe Schmerzintensität"
  }
  if (degree == 3) {
    return "Mäßige Einschränkung";
  }
  if (degree == 4) {
    return "Hochgradige Einschränkung";
  }
}

function degreeInterpretation(degree) {
  if (degree < 3) {
    return "Funktionaler persistierender Schmerz";
  }
  return "Dysfunktionaler chronischer Schmerz";
}

function toRomanPseudo(number) {
  if (number == 1) {
    return 'I';
  }
  if (number == 2) {
    return 'II';
  }
  if (number == 3) {
    return 'III';
  }
  if (number == 4) {
    return 'IV';
  }
  return 'X';
}

function setFrameBg(frame, newState) {
  let currentState;
  for (const name of frame.classList) {
    if (name.includes('bg-')) {
      currentState = name;
    }
  }
  frame.classList.remove(currentState);
  frame.classList.add(newState);
}


// input validation warnings
const customNumberInputComponents = document.getElementsByClassName("custom-input-warning-component");


for (const component of customNumberInputComponents) {
  for (const input of component.querySelectorAll('input[type=number]')) {
    input.addEventListener('input', () => {
      removeCustomInputWarning(component);
    });
  }
}

function addCustomInputWarning(component) {
  const inputGroups = component.getElementsByClassName('input-group');
  const customWarnings = component.getElementsByClassName('custom-input-warning');
  for (const inputGroup of inputGroups) {
    for (const child of inputGroup.children) {
      child.classList.remove('border-secondary');
      child.classList.add('border-warning');
    }
  }
  for (const warning of customWarnings) {
    warning.style.display = "";
  }
}

function removeCustomInputWarning(component) {
  const inputGroups = component.getElementsByClassName('input-group');
  const customWarnings = component.getElementsByClassName('custom-input-warning');
  for (const inputGroup of inputGroups) {
    for (const child of inputGroup.children) {
      child.classList.remove('border-warning');
      child.classList.add('border-secondary');
    }
  }
  for (const warning of customWarnings) {
    warning.style.display = "none";
  }
}


function getExaminationFormData() {
  // get a shallow representation of the examination data
  // get all the different types of input fields
  const examinationFormData = {};
  const examination = document.querySelector("#examination");
  const actualCheckboxes = examination.querySelectorAll('input[type=checkbox]');
  const selectFields = examination.getElementsByClassName('form-select');
  const radioCheckboxes = examination.querySelectorAll('input[type=radio]');
  const radioGroupNames = new Set();
  for (const radio of radioCheckboxes) {
    // will only be added if the set does not contain the name already
    radioGroupNames.add(radio.name);
  }
  const numberFields = examination.querySelectorAll('input[type=number]');
  // create entries for all data input fields
  for (const name of radioGroupNames) {
    examinationFormData[name] = getSelectedRadioButtonValue(getRadioButtons(name));
  }
  for (const checkbox of actualCheckboxes) {
    examinationFormData[checkbox.id] = Number(checkbox.checked);
  }
  for (const select of selectFields) {
    examinationFormData[select.id] = select.value;
  }
  for (const number of numberFields) {
    examinationFormData[number.id] = number.value;
  }


  return examinationFormData;
}

// helper functions
function getRadioButtons(name) {
  return document.querySelectorAll(`input[name='${name}']`);
}

function getSelectedRadioButtonValue(radioButtons) {
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      return radioButton.value;
    }
  }
  return "";
}


// pattern matching 
function extableReplaceStringRow(inputString, str) {
  // Regular expression to match the pattern "${i}_${j}"
  const regex = /^(.+)_(\d+)_(\d+)$/;

  // Check if the input string matches the pattern
  const match = inputString.match(regex);
  if (match) {
    const prefix = match[1];
    const j = match[3];
    const replacedString = `${prefix}_${str}_${j}`;
    return replacedString;
  } else {
    // If the input string does not match the pattern, return null
    return null;
  }
}

function extableGetCol(inputString) {
  // Regular expression to match the pattern "${i}_${j}"
  const regex = /^(.+)_(\d+)_(\d+)$/;

  // Check if the input string matches the pattern
  const match = inputString.match(regex);
  if (match) {
    const j = match[3];
    return j;
  } else {
    // If the input string does not match the pattern, return null
    return null;
  }
}

function extableToTableName(inputString) {
  // Regular expression to match the pattern "${i}_${j}"
  const regex = /^(.+)_(\d+)_(\d+)$/;

  // Check if the input string matches the pattern
  const match = inputString.match(regex);
  if (match) {
    const prefix = match[1];
    const replacedString = `${prefix}`;
    return replacedString;
  } else {
    // If the input string does not match the pattern, return null
    return null;
  }
}

function requiredchecksExtractValues(inputString) {
  const regex = /^(.+)_(\d+)$/;
  const match = inputString.match(regex);
  if (match) {
    const name = match[1];
    const value = parseInt(match[2], 10); // Convert the matched digits to an integer
    return { name, value };
  } else {
    // If the input string does not match the pattern, return null or handle the error accordingly
    return null;
  }
}



/* ------------------------------------------------------------------------------------*/
/*                                  DIAGNOSIS                      
*/

const diagnosisTabsRight = document.getElementsByClassName("diagnosis-tab-right");

const diagnosisTabsLeft = document.getElementsByClassName("diagnosis-tab-left");


/* ------------------------------------------------------------------------------------*/

function getExaminationDataSide(examinationFormData, side) {
  // get left or right side of the examination form data (and neutral data)
  // (R = right side from the patient perspective)
  const result = {};
  for (key in examinationFormData) {
    if (!key.includes('L_') && !key.includes('R_')) {
      // neutral data, copy
      result[key] = examinationFormData[key];
      continue;
    }
    if (!(key.includes(side + '_'))) {
      // wrong side, skip
      continue;
    }
    // clean up key
    const cleanKey = key.replace(side + '_', '_');
    result[cleanKey] = examinationFormData[key];
  }
  return result;
}


function getU(examinationFormDataSide) {
  // convert examination form data into a format that is easier to use
  let ex = examinationFormDataSide;
  const U = {};
  // U1a
  U['1a'] = [];
  for (let i = 0; i < 6; i++) {
    U['1a'][i] = Boolean(Number((ex['1a_' + i])));
  }
  // U1b
  U['1b'] = [];
  for (let i = 0; i < 3; i++) {
    U['1b'][i] = Boolean(Number((ex['1b_' + i])));
  }
  // U2
  U['2'] = {
    ref: ex['2_ref'],
    horizontal: Number(ex['2_horizontal']),
    vertical: Number(ex['2_vertical']),
    center_dev: Number(ex['2_center_dev']),
    side: ex['2_side'],
  };
  // U3
  U['3'] = Number(ex['3_select']);
  // U4
  U['4'] = {
    A: {
      'opening': ex['4A_opening'],
    },
    B: {
      'opening': ex['4B_opening'],
      'T': [Boolean(Number(ex['4B_0_0'])), Boolean(Number(ex['4B_0_1'])), Boolean(Number(ex['4B_0_2']))],
      'M': [Boolean(Number(ex['4B_1_0'])), Boolean(Number(ex['4B_1_1']))],
      'K': [Boolean(Number(ex['4B_2_0'])), Boolean(Number(ex['4B_2_1']))],
      'A': [Boolean(Number(ex['4B_3_0'])), Boolean(Number(ex['4B_3_1']))],
      'N': [Boolean(Number(ex['4B_4_0'])), Boolean(Number(ex['4B_4_1']))],
    },
    C: {
      'opening': ex['4C_opening'],
      'T': [Boolean(Number(ex['4C_0_0'])), Boolean(Number(ex['4C_0_1'])), Boolean(Number(ex['4C_0_2']))],
      'M': [Boolean(Number(ex['4C_1_0'])), Boolean(Number(ex['4C_1_1']))],
      'K': [Boolean(Number(ex['4C_2_0'])), Boolean(Number(ex['4C_2_1']))],
      'A': [Boolean(Number(ex['4C_3_0'])), Boolean(Number(ex['4C_3_1']))],
      'N': [Boolean(Number(ex['4C_4_0'])), Boolean(Number(ex['4C_4_1']))],
    },
    D: Boolean(Number(ex['4D'])),
  };
  // U5
  U['5'] = {
    A: {
      'latR': Number(ex['5A_latR']),
      'T': [Boolean(Number(ex['5A_0_0'])), Boolean(Number(ex['5A_0_1'])), Boolean(Number(ex['5A_0_2']))],
      'M': [Boolean(Number(ex['5A_1_0'])), Boolean(Number(ex['5A_1_1']))],
      'K': [Boolean(Number(ex['5A_2_0'])), Boolean(Number(ex['5A_2_1']))],
      'A': [Boolean(Number(ex['5A_3_0'])), Boolean(Number(ex['5A_3_1']))],
      'N': [Boolean(Number(ex['5A_4_0'])), Boolean(Number(ex['5A_4_1']))],
    },
    B: {
      'latL': Number(ex['5B_latL']),
      'T': [Boolean(Number(ex['5B_0_0'])), Boolean(Number(ex['5B_0_1'])), Boolean(Number(ex['5B_0_2']))],
      'M': [Boolean(Number(ex['5B_1_0'])), Boolean(Number(ex['5B_1_1']))],
      'K': [Boolean(Number(ex['5B_2_0'])), Boolean(Number(ex['5B_2_1']))],
      'A': [Boolean(Number(ex['5B_3_0'])), Boolean(Number(ex['5B_3_1']))],
      'N': [Boolean(Number(ex['5B_4_0'])), Boolean(Number(ex['5B_4_1']))],
    },
    C: {
      'protr': Number(ex['5C_protr']),
      'T': [Boolean(Number(ex['5C_0_0'])), Boolean(Number(ex['5C_0_1'])), Boolean(Number(ex['5C_0_2']))],
      'M': [Boolean(Number(ex['5C_1_0'])), Boolean(Number(ex['5C_1_1']))],
      'K': [Boolean(Number(ex['5C_2_0'])), Boolean(Number(ex['5C_2_1']))],
      'A': [Boolean(Number(ex['5C_3_0'])), Boolean(Number(ex['5C_3_1']))],
      'N': [Boolean(Number(ex['5C_4_0'])), Boolean(Number(ex['5C_4_1']))],
    },
  };
  // U6
  U['6'] = {
    'K': [
      Boolean(Number(ex['6_0_0'])),
      Boolean(Number(ex['6_0_1'])),
      Boolean(Number(ex['6_0_2'])),
      Boolean(Number(ex['6_0_3'])),
      Boolean(Number(ex['6_0_4']))
    ],
    'R': [
      Boolean(Number(ex['6_1_0'])),
      Boolean(Number(ex['6_1_1'])),
      Boolean(Number(ex['6_1_2'])),
    ],
  };
  // U7
  U['7'] = {
    'K': [
      Boolean(Number(ex['7_0_0'])),
      Boolean(Number(ex['7_0_1'])),
      Boolean(Number(ex['7_0_2'])),
      Boolean(Number(ex['7_0_3']))
    ],
    'R': [
      Boolean(Number(ex['7_1_0'])),
      Boolean(Number(ex['7_1_1'])),
    ]
  };
  // U8
  U['8'] = {
    'W': [
      Boolean(Number(ex['8_0_0'])),
      Boolean(Number(ex['8_0_1'])),
      Boolean(Number(ex['8_0_2'])),
    ],
    'B': [
      Boolean(Number(ex['8_1_0'])),
      Boolean(Number(ex['8_1_1'])),
      Boolean(Number(ex['8_1_2'])),
    ],
  };
  // U9
  U['9'] = {
    'Tp': [
      Boolean(Number(ex['9a_0_0'])),
      Boolean(Number(ex['9a_0_1'])),
      Boolean(Number(ex['9a_0_2'])),
      Boolean(Number(ex['9a_0_3'])),
    ],
    'Tm': [
      Boolean(Number(ex['9a_1_0'])),
      Boolean(Number(ex['9a_1_1'])),
      Boolean(Number(ex['9a_1_2'])),
      Boolean(Number(ex['9a_1_3'])),
    ],
    'Ta': [
      Boolean(Number(ex['9a_2_0'])),
      Boolean(Number(ex['9a_2_1'])),
      Boolean(Number(ex['9a_2_2'])),
      Boolean(Number(ex['9a_2_3'])),
    ],
    'MU': [
      Boolean(Number(ex['9a_3_0'])),
      Boolean(Number(ex['9a_3_1'])),
      Boolean(Number(ex['9a_3_2'])),
      Boolean(Number(ex['9a_3_3'])),
    ],
    'MK': [
      Boolean(Number(ex['9a_4_0'])),
      Boolean(Number(ex['9a_4_1'])),
      Boolean(Number(ex['9a_4_2'])),
      Boolean(Number(ex['9a_4_3'])),
    ],
    'MA': [
      Boolean(Number(ex['9a_5_0'])),
      Boolean(Number(ex['9a_5_1'])),
      Boolean(Number(ex['9a_5_2'])),
      Boolean(Number(ex['9a_5_3'])),
    ],
    'LP': [
      Boolean(Number(ex['9b_0_0'])),
      Boolean(Number(ex['9b_0_1'])),
      Boolean(Number(ex['9b_0_2'])),
    ],
    'ULP': [
      Boolean(Number(ex['9b_1_0'])),
      Boolean(Number(ex['9b_1_1'])),
      Boolean(Number(ex['9b_1_2'])),
    ],
  };
  // U10
  U['10'] = {
    'Rs': [
      Boolean(Number(ex['10_0_0'])),
      Boolean(Number(ex['10_0_1'])),
      Boolean(Number(ex['10_0_2'])),
    ],
    'Rr': [
      Boolean(Number(ex['10_1_0'])),
      Boolean(Number(ex['10_1_1'])),
      Boolean(Number(ex['10_1_2'])),
    ],
    'BM': [
      Boolean(Number(ex['10_2_0'])),
      Boolean(Number(ex['10_2_1'])),
      Boolean(Number(ex['10_2_2'])),
    ],
    'T': [
      Boolean(Number(ex['10_3_0'])),
      Boolean(Number(ex['10_3_1'])),
      Boolean(Number(ex['10_3_2'])),
    ],
  };
  return U;
}

function getSF(patientFormData) {
  // convert patient form data into a format that is easier to use
  const SF = {};
  for (var i = 1; i <= 14; i++) {
    // loop through question numbers
    if (![2, 4, 6, 7].includes(i)) {
      // simple true/false questions
      if (!(i in patientFormData)) {
        // question has not been answered
        SF[i] = false;
      } else {
        // convert number to boolean
        SF[i] = Boolean(Number(patientFormData[i]));
      }
    } else {
      if (i == 2 || i == 6) {
        // years or months 
        SF[i] = {
          years: Number(patientFormData[i].years),
          months: Number(patientFormData[i].months),
        }
      } else {
        // i == 4 or i == 7
        SF[i] = {
          // convert numbers to boolean
          A: Boolean(Number(patientFormData[i].A)),
          B: Boolean(Number(patientFormData[i].B)),
          C: Boolean(Number(patientFormData[i].C)),
          D: Boolean(Number(patientFormData[i].D)),
        }
      }
    }
  }
  SF['phq'] = Number(patientFormData[15][1])
    + Number(patientFormData[15][2])
    + Number(patientFormData[15][3])
    + Number(patientFormData[15][4]);
  const { BP, points } = getGCS(patientFormData);
  let degree;
  if (BP < 3 && points < 50) {
    degree = 1;
  }
  else if (BP < 3 && points >= 50) {
    degree = 2;
  }
  else if (BP <= 4) {
    degree = 3;
  }
  else {
    degree = 4;
  }
  SF['gcs'] = {
    degree: degree,
    BP: BP,
    points: points,
  }
  return SF;
}

function getGCS(patientFormData) {
  let BP = 0.0;
  let points;
  const questions = {
    1: Number(patientFormData['16']),
    2: Number(patientFormData['17']),
    3: Number(patientFormData['18']),
    4: Number(patientFormData['19']),
    5: Number(patientFormData['20']),
    6: Number(patientFormData['21']),
    7: Number(patientFormData['22']),
    8: Number(patientFormData['23']),
  };
  const days = questions[1];
  // number of days
  if (days <= 6) {
    BP += 0;
  }
  else if (days <= 14) {
    BP += 1;
  }
  else if (days <= 30) {
    BP += 2
  }
  else {
    BP += 3;
  }
  // subjektive beeintr.
  points = (questions[5] + questions[6] + questions[7] + questions[8]) * 10.0 / 4.0;
  if (points <= 29) {
    BP += 0;
  }
  else if (points <= 49) {
    BP += 1;
  }
  else if (points <= 69) {
    BP += 2;
  }
  else {
    BP += 3;
  }
  points = 0.0;
  // charakt. schmerzintens.
  if (BP < 3) {
    points = (questions[2] + questions[3] + questions[4]) * 10.0 / 3.0;
  }
  return { BP: BP, points: points };
}


function getDiagnosis() {
  setPatientFormDataFromInput();
  patientRecordLocal['examinationFormData'] = getExaminationFormData();


  /*const SF = {
    '1': true,
    '2': {
      years: 1,
      months: 4,
    },
    '3': true,
    '4': {
      A: false,
      B: true,
      C: false,
      D: false,
    },
    '5': false,
    '6': {
      years: 1,
      months: 1,
    },
    '7': {
      A: false,
      B: false,
      C: false,
      D: false,
    },
    '8': false,
    '9': false,
    '10': false,
    '11': false,
    '12': false,
    '13': false,
    '14': false,
  };*/
  /*
    const U = {
      '1a': [false, true, true, true, true, false],
      '1b': [false , true, false],
      '2': {
        'ref': 21,
        'horizontal': 5,
        'vertical': 9,
        'center_dev': 2,
        'side': 'L',
      },
      '3': 1,
      '4': {
        A: {
          'opening': 40,
        },
        B: {
          'opening': 45,
          'T': [false, false, false],
          'M': [false, false],
          'K': [true, true],
          'A': [true, false],
          'N': [false, false],
        },
        C: {
          'opening': 50,
          'T': [false, false, false],
          'M': [false, false],
          'K': [false, false],
          'A': [false, false],
          'N': [false, false],
        },
        D: false,
      },
      '5': {
        A: {
          'latR': 5,
          'T': [false, false, false],
          'M': [false, false],
          'K': [false, false],
          'A': [false, false],
          'N': [false, false],
        },
        B: {
          'latL': 3,
          'T': [false, false, false],
          'M': [false, false],
          'K': [false, false],
          'A': [false, false],
          'N': [false, false],
        },
        C: {
          'protr': 2,
          'T': [false, false, false],
          'M': [false, false],
          'K': [false, false],
          'A': [false, false],
          'N': [false, false],
        },
      },
      '6': {
        'K': [true, false, false, false, false],
        'R': [false, false, false],
      },
      '7': {
        'K': [true, false, false, false],
        'R': [true, false]
      },
      '8': {
        'W': [true, false, false],
        'B': [true, false, false],
      },
      '9': {
        'Tp': [false, true, false, false],
        'Tm': [false, true, true, false],
        'Ta': [false, false, false, false],
        'MU': [false, false, false, false],
        'MK': [false, false, false, false],
        'MA': [false, false, false, false],
        'LP': [false, false, false],
        'ULP': [false, false, false],
      },
      '10': {
        'Rs': [false, false, false],
        'Rr': [false, false, false],
        'BM': [false, false, false],
        'T': [false, false, false],
      } 
  
      
    };*/

  const SF = getSF(patientRecordLocal.patientFormData);
  phqTotalValueField.innerHTML = SF.phq;

  const examinationFormDataLeft = getExaminationDataSide(patientRecordLocal.examinationFormData, 'L');
  const examinationFormDataRight = getExaminationDataSide(patientRecordLocal.examinationFormData, 'R');
  const U_left = getU(examinationFormDataLeft);
  const U_right = getU(examinationFormDataRight);
  diagnosisData.painBasedAnamnesis = getPainBasedAnamnesis(SF);
  diagnosisData.painBasedDiagRight = getPainBasedDiagnosis(SF, U_right);
  diagnosisData.painBasedDiagLeft = getPainBasedDiagnosis(SF, U_left);
  diagnosisData.intraArticularAnamnesis = getIntraArticularAnamnesis(SF);
  diagnosisData.intraArticularRight = getIntraArticularDiagnosis(SF, U_right);
  diagnosisData.intraArticularLeft = getIntraArticularDiagnosis(SF, U_left);
  diagnosisData.degDysAnamnesis = getDegDysAnamnesis(SF);
  diagnosisData.degDysRight = getDegDysDiagnosis(SF, U_right);
  diagnosisData.degDysLeft = getDegDysDiagnosis(SF, U_left);

  const anam1ListElement = document.getElementById("anam1");
  const symp1RListElement = document.getElementById("symp1R");
  const diag1RListElement = document.getElementById("diag1R");
  const symp1LListElement = document.getElementById("symp1L");
  const diag1LListElement = document.getElementById("diag1L");

  const anam2ListElement = document.getElementById("anam2");
  const symp2RListElement = document.getElementById("symp2R");
  const diag2RListElement = document.getElementById("diag2R");
  const symp2LListElement = document.getElementById("symp2L");
  const diag2LListElement = document.getElementById("diag2L");

  const anam3ListElement = document.getElementById("anam3");
  const symp3RListElement = document.getElementById("symp3R");
  const diag3RListElement = document.getElementById("diag3R");
  const symp3LListElement = document.getElementById("symp3L");
  const diag3LListElement = document.getElementById("diag3L");

  anamnesisToHTMLList(diagnosisData.painBasedAnamnesis, anam1ListElement);
  resultToHTMLLists(diagnosisData.painBasedDiagRight, symp1RListElement, diag1RListElement);
  resultToHTMLLists(diagnosisData.painBasedDiagLeft, symp1LListElement, diag1LListElement);

  anamnesisToHTMLList(diagnosisData.intraArticularAnamnesis, anam2ListElement);
  resultToHTMLLists(diagnosisData.intraArticularRight, symp2RListElement, diag2RListElement);
  resultToHTMLLists(diagnosisData.intraArticularLeft, symp2LListElement, diag2LListElement);

  anamnesisToHTMLList(diagnosisData.degDysAnamnesis, anam3ListElement);
  resultToHTMLLists(diagnosisData.degDysRight, symp3RListElement, diag3RListElement);
  resultToHTMLLists(diagnosisData.degDysLeft, symp3LListElement, diag3LListElement);
}

function anamnesisToHTMLList(anamnesis, anamnesisHTMLElmt) {
  var itemTag;
  anamnesisHTMLElmt.innerHTML = "";

  for (const symptom of anamnesis.symptoms) {
    if (symptom.class == "positive") {
      itemTag = "info";
    }
    else if (symptom.class == "negative") {
      itemTag = "warning";
    }
    anamnesisHTMLElmt.innerHTML +=
      `<li class='list-group-item list-group-item-${itemTag}'>` +
      symptom.description +
      "</li>";
  }

}

function resultToHTMLLists(result, symptomsListElmt, diagnosisListElmt) {
  var itemTag;
  symptomsListElmt.innerHTML = "";
  diagnosisListElmt.innerHTML = "";

  for (const symptom of result.symptoms) {
    if (symptom.class == "positive") {
      itemTag = "info";
    }
    else if (symptom.class == "negative") {
      itemTag = "warning";
    }
    else if (symptom.class == "incomplete") {
      itemTag = "danger";
    }
    symptomsListElmt.innerHTML +=
      `<li class='list-group-item list-group-item-${itemTag}'>` +
      symptom.description +
      ('localisation' in symptom && symptom.localisation.length > 0
        ? "\n(" + symptom.localisation.join(", ") + ")\n"
        : "") +
      ('causes' in symptom && symptom.causes.length > 0
        ? "\n(" + symptom.causes.join(", ") + ")\n"
        : "") +
      "</li>";
  }

  if (result.diagnoses.length == 0) {
    itemTag = "warning";
    diagnosisListElmt.innerHTML += `<li class='list-group-item list-group-item-${itemTag}'>` +
      "Keine Diagnose vorhanden" +
      "</li>";
  }

  for (const diagnosis of result.diagnoses) {
    if (diagnosis.class.includes("diagnosis")) {
      itemTag = "success";
    }
    else if (diagnosis.class.includes("incomplete")) {
      itemTag = "warning";
    }
    else if (diagnosis.class.includes("failure")) {
      itemTag = "danger";
    }

    diagnosisListElmt.innerHTML += `<li class='list-group-item list-group-item-${itemTag}'>` +
      diagnosis.description +
      ('localisation' in diagnosis && diagnosis.localisation.length > 0
        ? "\n(" + diagnosis.localisation.join(", ") + ")\n"
        : "") +
      "</li>";
  }
}


const mapLocalisationIndices = new Map();
mapLocalisationIndices.set(-1, 'Keine');
mapLocalisationIndices.set(0, 'Temporalis');
mapLocalisationIndices.set(1, 'Masseter');
mapLocalisationIndices.set(2, 'Kiefergelenk');
mapLocalisationIndices.set(3, 'Andere Kaumuskeln');
mapLocalisationIndices.set(4, 'Nicht-mastik. Kaumuskeln');

/* ----------------------- ANAMNESE --------------------------------- */

function getPainBasedAnamnesis(SF) {
  const anamnesis = {
    symptoms: [],
  };

  const pain = SF[1] && SF[3] && (SF[4].A || SF[4].B || SF[4].C || SF[4].D);
  anamnesis.symptoms.push(painBasedSymptoms[1](pain));
  anamnesis['class'] = boolToClass(pain);
  /*if(pain) {
    diagnosisTabs[0].style.display = "block";
  } else {
    diagnosisTabs[0].style.display = "none";
  }*/
  return anamnesis;
}



function getPainBasedDiagnosis(SF, U) {

  const examination = {
    symptoms: [],
    diagnoses: [],
  };

  const pain = SF[1] && SF[3] && (SF[4].A || SF[4].B || SF[4].C || SF[4].D);

  //examination.anamnese.push(painBasedSymptoms[1](pain));
  if (!pain) {
    // Weitere Schmerzdiagnosen untersuchen
    //examination.anamnese.push(painBasedSymptoms[7](["Muskel, Kiefergelenk"]));
    return examination;
  }

  const confirmedPain = [];

  if (U['1a'][1]) {
    // Temporalis
    confirmedPain.push(0);
  }
  if (U['1a'][2]) {
    // Masseter
    confirmedPain.push(1);
  }
  if (U['1a'][3]) {
    // Kiefergelenk
    confirmedPain.push(2);
  }
  if (U['1a'][4]) {
    // Andere Kaum.
    confirmedPain.push(3);
  }
  if (U['1a'][5]) {
    // Nicht-mastik. Kaum.
    confirmedPain.push(4);
  }

  const noConfirmedPain = (confirmedPain.length == 0) || U['1a'][0];

  examination['symptoms'].push(painBasedSymptoms[3](confirmedPain.map(i => mapLocalisationIndices.get(i))));
  if (noConfirmedPain) {
    // Weitere Schmerzdiagnosen untersuchen
    examination.diagnoses.push(painBasedSymptoms[7](["Muskel", "Kiefergelenk"]));
    return examination;
  }

  const musclePain = [0, 1, 3, 4].some(i => confirmedPain.includes(i));
  const jointPain = confirmedPain.includes(2);
  if (!musclePain && !jointPain) {
    // Weitere Schmerzdiagnosen untersuchen
    examination.diagnoses.push(painBasedSymptoms[7](["Muskel", "Kiefergelenk"]));
    return examination;
  }

  if (musclePain) {
    musclePainExamination(U, musclePain, confirmedPain, examination);
  }

  if (jointPain) {
    jointPainExamination(U, confirmedPain, examination);
  }

  if (examination.diagnoses
    .some(diagnosis =>
      diagnosis.description.includes("My") ||
      diagnosis.description.includes("Arthralgie"))) {
    // Myalgie oder Arthralgie
    headPainExamination(SF, U, examination);
  }

  return examination;

}


/* ---------------- MUSCLE PAIN ---------------------- */

function musclePainExamination(U, musclePain, confirmedPain, examination) {
  const confirmedMusclePain = [];
  const openingPain = [];
  const palpationPain = [];
  const palpationPainSpecific = [];

  if (musclePain) {
    // Temporalis
    if (U['4'].B.T[1] || U['4'].C.T[1]) {
      openingPain.push(0);
    }
    if (U['9'].Tp[1] || U['9'].Tm[1] || U['9'].Ta[1]) {
      palpationPain.push(0);
    }
    // Masseter 
    if (U['4'].B.M[1] || U['4'].C.M[1]) {
      openingPain.push(1);
    }
    if (U['9'].MU[1] || U['9'].MK[1] || U['9'].MA[1]) {
      palpationPain.push(1);
    }
    // Andere Kaum.
    if (U['4'].B.A[1] || U['4'].C.A[1]) {
      openingPain.push(3);
    }
    // Nicht-mastik. Kaum.
    if (U['4'].B.N[1] || U['4'].C.N[1]) {
      openingPain.push(4);
    }

    // Temporalis
    if (confirmedPain.includes(0) && (openingPain.includes(0) || palpationPain.includes(0))) {
      confirmedMusclePain.push([0, openingPain.includes(0), palpationPain.includes(0)]);
    }
    // Masseter
    if (confirmedPain.includes(1) && (openingPain.includes(1) || palpationPain.includes(1))) {
      confirmedMusclePain.push([1, openingPain.includes(1), palpationPain.includes(1)]);
    }
    // Andere Kaum.
    if (confirmedPain.includes(3) && openingPain.includes(3)) {
      confirmedMusclePain.push([3, openingPain.includes(3)]);
    }
    // Nicht-mastik. Kaum.
    if (confirmedPain.includes(4) && openingPain.includes(4)) {
      confirmedMusclePain.push([4, openingPain.includes(4)]);
    }

    examination['symptoms'].push(painBasedSymptoms[5](confirmedMusclePain));
    if (confirmedMusclePain.length > 0) {
      // Myalgie diagnosis
      examination['diagnoses'].push(painBasedDiagnoses[15](confirmedMusclePain));
    }

    // palpation
    examination['symptoms'].push(painBasedSymptoms[9](palpationPain));
    if (palpationPain.length == 0) {
      // weitere Schmerzdiagnosen untersuchen
      examination.diagnoses.push(painBasedSymptoms[7](confirmedMusclePain.map(index => mapLocalisationIndices.get(index[0]))));
      return;
    }

    const transfer = {
      tp: confirmedPain.includes(1) && U['9'].Tp[3],
      tm: confirmedPain.includes(1) && U['9'].Tm[3],
      ta: confirmedPain.includes(1) && U['9'].Ta[3],
      MU: confirmedPain.includes(0) && U['9'].MU[3],
      MK: confirmedPain.includes(0) && U['9'].MK[3],
      MA: confirmedPain.includes(0) && U['9'].MA[3],
    }
    const spread = {
      temporalis: confirmedPain.includes(0) &&
        (U['9'].Tp[1] && !U['9'].Tp[3] && U['9'].Tm[1] && !U['9'].Tm[3]) ||
        (U['9'].Tp[1] && !U['9'].Tp[3] && U['9'].Ta[1] && !U['9'].Ta[3]) ||
        (U['9'].Tm[1] && !U['9'].Tm[3] && U['9'].Ta[1] && !U['9'].Ta[3]),
      masseter: confirmedPain.includes(1) &&
        (U['9'].MU[1] && !U['9'].MU[3] && U['9'].MK[1] && !U['9'].MK[3]) ||
        (U['9'].MU[1] && !U['9'].MU[3] && U['9'].MA[1] && !U['9'].MA[3]) ||
        (U['9'].MK[1] && !U['9'].MK[3] && U['9'].MA[1] && !U['9'].MA[3]),
    }
    // Temporalis
    if (palpationPain.includes(0)) {
      palpationPainSpecific.push({
        localisation: 0,
        transfer: transfer.MU || transfer.MK || transfer.MA,
        spread: spread.temporalis
      })
    }
    // Masseter
    if (palpationPain.includes(1)) {
      palpationPainSpecific.push({
        localisation: 1,
        transfer: transfer.tp || transfer.tm || transfer.ta,
        spread: spread.masseter
      })
    }
    examination['symptoms'].push(painBasedSymptoms[12](palpationPainSpecific));
    for (i = 0; i < palpationPainSpecific.length; i++) {
      if (palpationPainSpecific[i].transfer) {
        // Myofaszialier Schmerz mit Übertragung

        examination['diagnoses'].push(painBasedDiagnoses[18](palpationPainSpecific[i]));
      }
      else if (palpationPainSpecific[i].spread) {
        // Myofaszialier Schmerz
        examination['diagnoses'].push(painBasedDiagnoses[17](palpationPainSpecific[i]));
      } else {
        // Lokale Myalgie
        examination['diagnoses'].push(painBasedDiagnoses[16](palpationPainSpecific[i]));
      }
    }
  }
}

/* ---------------- JOINT PAIN ---------------------- */

function jointPainExamination(U, confirmedPain, examination) {
  const openingPain = [];
  const palpationPain = [];
  const confirmedJointPain = [];
  const excursivePain = [];

  // Kiefergelenk
  if (U['4'].B.K[1] || U['4'].C.K[1]) {
    openingPain.push(2);
  }
  if (U['5'].A.K[1] || U['5'].B.K[1] || U['5'].C.K[1]) {
    excursivePain.push(2);
  }
  if (U['9'].LP[1] || U['9'].ULP[1]) {
    palpationPain.push(2);
  }
  // Kiefergelenk
  if (confirmedPain.includes(2) && (openingPain.includes(2) || excursivePain.includes(2) || palpationPain.includes(2))) {
    confirmedJointPain.push([2, openingPain.includes(2), excursivePain.includes(2), palpationPain.includes(2)]);
  }

  examination['symptoms'].push(painBasedSymptoms[10](confirmedJointPain));
  if (confirmedJointPain.length == 0) {
    // weitere Schmerzdiagnose untersuchen
    examination.diagnoses.push(painBasedSymptoms[7](["Kiefergelenk"]));
    return;
  }
  if (confirmedJointPain.length > 0) {
    // Arthralgie
    examination['diagnoses'].push(painBasedDiagnoses[19]);
  }
}

/* ---------------- KOPFSCHMERZEN ---------------------- */

function headPainExamination(SF, U, examination) {
  const headPain = SF[5];
  const headPainModified = SF[7].A || SF[7].B || SF[7].C || SF[7].D;
  const headPainRelevant = headPain && headPainModified;
  const headPainCauses = [];
  examination['symptoms'].push(painBasedSymptoms[4]([headPain, headPainModified]));
  if (!SF[5]) {
    return;
  }

  if (!headPainRelevant) {
    // weitere Schmerzdiagnosen untersuchen
    examination.diagnoses.push(painBasedSymptoms[7](["Kopfschmerz"]));
    return;
  }
  // confirmed pain
  examination['symptoms'].push(painBasedSymptoms[8](U['1b'][1]));
  if (!U['1b'][1]) {
    // weitere Schmerzdiagnosen untersuchen
    examination.diagnoses.push(painBasedSymptoms[7](["Kopfschmerz"]));
    return;
  }
  // cause of pain
  if (U['4'].B.T[2] || U['4'].C.T[2]) {
    headPainCauses.push('opening');
  }
  if (U['5'].A.T[2] || U['5'].B.T[2] || U['5'].C.T[2]) {
    headPainCauses.push('excursion');
  }
  if (U['9'].Tm[2]) {
    headPainCauses.push('palpation');
  }
  examination['symptoms'].push(painBasedSymptoms[11](headPainCauses));

  if (headPainCauses.length == 0) {
    // weitere Schmerzdiagnosen untersuchen
    examination.diagnoses.push(painBasedSymptoms[7](["Kopfschmerz"]));
    return;
  }
  examination.diagnoses.push(painBasedDiagnoses[20]);
}

function getIntraArticularAnamnesis(SF) {
  const anamnesis = {
    symptoms: [],
  };

  anamnesis.symptoms.push(dysfunctionBasedSymptoms[2](SF[9] && SF[10]));
  anamnesis.symptoms.push(dysfunctionBasedSymptoms['1a'](SF[8]));

  return anamnesis;

}

function getIntraArticularDiagnosis(SF, U) {
  const examination = {
    symptoms: [],
    diagnoses: [],
  };

  const openingFunction = Number(U['4'].C.opening) >= 40 || U['4'].C.opening.length == 0;
  const jointRelevant = SF[8] || U[6].K[2] || U[7].K[1];
  const jointSoundPat = U[6].K[2] || U[7].K[1];
  const jointCreak = (U['6'].K[0] || U['6'].K[1]) && U['7'].K[0];
  const lockjaw = SF[11] && !SF[12]
  const reduction =
    !U['8'].W[0] && !U['8'].B[0] ||
    (U['8'].W[0] && (U['8'].W[1] || U['8'].W[2])) ||
    (U['8'].B[0] && (U['8'].B[1] || U['8'].B[2]));


  //examination.symptoms.push(dysfunctionBasedSymptoms[2](SF[9] && SF[10]));
  if (SF[9] && SF[10]) {
    examination.symptoms.push(dysfunctionBasedSymptoms[8](openingFunction));
    if (openingFunction) {
      examination.diagnoses.push(dysfunctionBasedDiagnoses[15]);
      examination.diagnoses.push({
        class: "diagnosis confirm",
        description: "Durch MRT bestätigen",
      });
      return examination;
    } else {
      examination.diagnoses.push(dysfunctionBasedDiagnoses[12]);
      examination.diagnoses.push({
        class: "diagnosis",
        description: "Durch MRT bestätigen",
      });
      return examination;
    }
  }



  examination.symptoms.push(dysfunctionBasedSymptoms['1b'](jointSoundPat));
  if (!jointRelevant) {
    //examination.diagnoses.push(dysfunctionBasedDiagnoses[6]);
    return examination;
  }

  examination.symptoms.push(dysfunctionBasedSymptoms[4](jointCreak));
  if (!jointCreak) {
    examination.diagnoses.push(dysfunctionBasedDiagnoses[6]);
    return examination;
  }

  examination.symptoms.push(dysfunctionBasedSymptoms[7](lockjaw));
  if (!lockjaw) {
    examination.diagnoses.push(dysfunctionBasedDiagnoses[11]);
    examination.diagnoses.push({
      class: "diagnosis",
      description: "Durch MRT bestätigen",
    });
    return examination;
  }

  examination.symptoms.push(dysfunctionBasedSymptoms[10](reduction));
  if (!reduction) {
    examination.diagnoses.push(dysfunctionBasedDiagnoses[12]);
    examination.diagnoses.push({
      class: "diagnosis",
      description: "Durch MRT bestätigen",
    });
    return examination;
  }

  examination.diagnoses.push(dysfunctionBasedDiagnoses[14]);
  examination.diagnoses.push({
    class: "diagnosis",
    description: "Durch MRT bestätigen",
  });
  return examination;
}

function getDegDysAnamnesis(SF) {
  const anamnesis = {
    symptoms: [],
  };

  anamnesis.symptoms.push(dysfunctionBasedSymptoms['1a'](SF[8]));

  return anamnesis;

}

function getDegDysDiagnosis(SF, U) {
  const examination = {
    symptoms: [],
    diagnoses: [],
  };

  const jointSoundPat = U[6].K[2] || U[7].K[1];
  const jointRelevant = SF[8] || U[6].K[2] || U[7].K[1];
  const frictionRub = U['6'].R[0] || U['6'].R[1] || U['7'].R[0];

  examination.symptoms.push(dysfunctionBasedSymptoms['1b'](jointSoundPat));
  if (!jointRelevant) {
    //examination.diagnoses.push(dysfunctionBasedDiagnoses[6]);
    return examination;
  }

  examination.symptoms.push(dysfunctionBasedSymptoms[5](frictionRub));
  if (!frictionRub) {
    examination.diagnoses.push(dysfunctionBasedDiagnoses[6]);
    return examination;
  }

  examination.diagnoses.push(dysfunctionBasedDiagnoses[13]);
  examination.diagnoses.push({
    class: "diagnosis confirm",
    description: "Durch CT bestätigen",
  });
  return examination;
}


const boolToClass = b => b ? "positive" : "negative";

const painBasedSymptoms = {
  1: positive => ({
    id: 'pbs1',
    class: boolToClass(positive),
    description: positive
      ? "Regionaler Schmerz [SF3] "
      + "UND Schmerz wird durch funktionelle oder parafunktionelle "
      + "Kieferbewegungen modifiziert [SF4]"
      : "Keine Schmerzen, die durch funktionelle oder parafunktionelle Kieferbewegungen modifiziert werden",
  }),
  3: confirmedPainLocalisation => ({
    id: 'pbs3',
    class: boolToClass(confirmedPainLocalisation.length > 0),
    description: confirmedPainLocalisation.length == 0
      ? "Keine Bestätigung der Schmerzlokalisation durch "
      + "den Untersucher [U1a]"
      : "Bestätigung der Schmerzlokalisation durch "
      + "den Untersucher [U1a]",
    localisation: confirmedPainLocalisation,
  }),
  5: confirmedMusclePain => ({
    id: 'pbs5',
    class: boolToClass(confirmedMusclePain.length > 0),
    description: confirmedMusclePain.length == 0
      ? "Kein bekannter Schmerz durch Mundöffnung [U4] oder Palpation [Muskel, U9] oder keine Bestätigung durch den Untersucher [U1]"
      : "Bekannter Schmerz: Mundöffnung [U4]"
      //+ confirmedMusclePain.filter(element => element[1]).map(element => mapLocalisationIndices.get(element[0]))
      + "oder 2s Palpation der Kaumuskulatur [Muskel, U9];\n"
      + "Bestätigung der Lokalisation [U1a]",
    localisation: confirmedMusclePain.map(element => mapLocalisationIndices.get(element[0])),
  }),
  10: confirmedJointPain => ({
    id: 'pbs10',
    class: boolToClass(confirmedJointPain.length > 0),
    description: confirmedJointPain.length == 0
      ? "Kein bekannter Schmerz im Kiefergelenk oder nicht bestätigt durch Untersucher"
      : "(1) Bekannter Schmerz durch: Mundöffnung [Gelenk, U4] "
      + "ODER excursive Kieferbewegungen [Gelenk, U5] ODER Palpation des KG "
      + "[Gelenk, U9]; UND\n"
      + "(2) Bestätigung der Lokalisation [U1a]",
    localisation: confirmedJointPain.map(element => mapLocalisationIndices.get(element[0])),
  }),
  9: palpationPain => ({
    id: 'pbs9',
    class: boolToClass(palpationPain.length > 0),
    description: palpationPain.length == 0
      ? "Kein bekannter Schmerz, 5s Palpation der Kaumuskulatur [Muskel, U9]"
      : "Bekannter Schmerz, 5s Palpation der Kaumuskulatur [Muskel, U9]",
    localisation: palpationPain.map(localisationIndex => mapLocalisationIndices.get(localisationIndex)),
  }),
  12: palpationPainSpecific => ({
    id: 'pbs12',
    class: boolToClass(palpationPainSpecific.some(pain => pain.transfer)),
    description: palpationPainSpecific.some(pain => pain.transfer)
      ? "Schmerzausbreitung jenseits d. Muskelgrenzen [Muskel, U9]"
      : "Keine Schmerzausbreitung jenseits d. Muskelgrenzen [Muskel, U9]",
    localisation: palpationPainSpecific
      .filter(element => element.transfer)
      .map(element => mapLocalisationIndices.get(element.localisation)),
  }),
  14: palpationPainSpecific => ({
    id: 'pbs14',
    class: boolToClass(palpationPainSpecific.some(pain => pain.spread)),
    description: palpationPainSpecific.some(pain => pain.spread)
      ? "Schmerzausbreitung jenseits der palpierten Stelle [Muskel, U9]"
      : "Keine Schmerzausbreitung jenseits der palpierten Stelle [Muskel, U9]"
  }),

  4: ([headPain, headPainModified]) => ({
    id: 'pbs4',
    class: boolToClass(headPain && headPainModified),
    description:
      headPain && headPainModified
        ? "Schläfenkopfschmerz jeglicher Art [SF5] UND Kopfschmerz wird " +
        "durch funktionelle oder parafunktionelle Kieferbewegungen modifiziert [SF7]"
        : headPain
          ? "Schläfenkopfschmerz jeglicher Art [SF5], wird jedoch nicht durch funktionelle oder " +
          "parafunktionelle Kieferbewegungen modifiziert [SF7]"
          : "Kein Schläfenkopfschmerz"
  }),
  8: confirmed => ({
    id: 'pbs8',
    class: boolToClass(confirmed),
    description: confirmed
      ? "Bestätigung der Kopfschmerzlokalisation durch den Untersucher [U1b]"
      : "Keine Bestätigung der Kopfschmerzlokalisation durch den Untersucher [U1b]"
  }),
  11: headPainCauses => ({
    id: 'pbs11',
    class: boolToClass(headPainCauses.length > 0),
    description: headPainCauses.length == 0
      ? "Kein bekannter Kopfschmerz durch Mundöffnung oder excursive Kieferbewegungen oder Palpation des M.temporalis"
      : "Bekannter Kopfschmerz durch: Mundöffnung ODER excursive "
      + "Kieferbewegungen ODER Palpation des M.temporalis [Temporalis in U4, "
      + "U5, ODER U9]",
    causes: headPainCauses,
  }),
  13: {
    id: 'pbs13',
    class: 'positive',
    description: "Kopfschmerzen, die nicht besser durch eine andere "
      + "Diagnose erklärt werden können"
  },
  7: localisation => ({
    id: 'pbs7',
    class: "failure",
    description: "Weitere Schmerzdiagnosen untersuchen",
    localisation: localisation
  }),
};

const painBasedDiagnoses = {
  2: {
    id: 'pbd2',
    class: "diagnosis",
    description: "Diagnose einer Myalgie oder Arthralgie",
  },
  15: confirmedMusclePain => ({
    id: 'pbd15',
    class: "incomplete",
    description: "Myalgie",
    localisation: confirmedMusclePain.map(element => mapLocalisationIndices.get(element[0])),
  }),
  16: palpationPainSpecific => ({
    id: 'pbd16',
    class: "diagnosis",
    description: "Lokale Myalgie",
    localisation: [mapLocalisationIndices.get(palpationPainSpecific.localisation)],
  }),
  17: palpationPainSpecific => ({
    id: 'pbd17',
    class: "diagnosis",
    description: "Myofaszialer Schmerz",
    localisation: [mapLocalisationIndices.get(palpationPainSpecific.localisation)],
  }),
  18: palpationPainSpecific => ({
    id: 'pbd18',
    class: "diagnosis",
    description: "Myofaszialer Schmerz mit Übertragung",
    localisation: [mapLocalisationIndices.get(palpationPainSpecific.localisation)],
  }),
  19: {
    id: 'pbd19',
    class: "diagnosis",
    description: "Arthralgie",
  },
  20: {
    id: 'pbd20',
    class: "incomplete",
    description: "Falls: Kopfschmerzen, die nicht besser durch eine andere "
      + "Diagnose erklärt werden können, dann: " + "Auf CMD zurückgeführte Kopfschmerzen. "
      + "Sonst: Weitere Schmerzdiagnosen untersuchen",
  },
};

const dysfunctionBasedSymptoms = {
  '1a': SF8 => ({
    id: 'dbs1a',
    class: boolToClass(SF8),
    description: SF8
      ? "Aktuelle gelenkbezogene Diagnose [SF8]"
      : "Keine aktuelle gelenkbezogene Diagnose [SF8]",
  }),
  '1b': jointSoundPat => ({
    id: 'dbs1b',
    class: boolToClass(jointSoundPat),
    description: jointSoundPat
      ? "Angabe von Kiefergelenkgeräuschen durch den Pat. während  "
      + "Untersuchung [U6 ODER U7]"
      : "Keine Angabe von Kiefergelenkgeräuschen durch den Pat. während  "
      + "Untersuchung [U6 ODER U7]"
  }),
  1: jointRelevant => ({
    id: 'dbs1',
    class: boolToClass(jointRelevant),
    description: jointRelevant
      ? "Aktuelle gelenkbezogene Diagnose (anamnestisch) [SF8]  "
      + "ODER Angabe von Kiefergelenkgeräuschen durch den Pat. während  "
      + "Untersuchung [U6 ODER U7]"
      : "Keine aktuelle gelenkbezogene Diagnose (anamnestisch) [SF8]  "
      + "UND keine Angabe von Kiefergelenkgeräuschen durch den Pat. während  "
      + "Untersuchung [U6 ODER U7]"
  }),
  2: dysfunction => ({
    id: 'dbs2',
    class: boolToClass(dysfunction),
    description: dysfunction
      ? "Vorausgehende Kieferklemme [SF9] UND Störungen beim Kauen [SF10]"
      : "Keine vorrausgehende Kieferklemme [SF9] oder keine Störungen beim Kauen [SF10]"
  }),
  3: jointRelevant => ({
    id: 'dbs3',
    class: boolToClass(jointRelevant),
    description: jointRelevant ?
      "Aktuelle Kiefergelenkgeräusche (anamnestisch) [SF8] "
      + "ODER Angabe von Kiefergelenkgeräuschen durch den Pat. während "
      + "Untersuchung[U6 ODER U7]"
      : "Keine aktuellen Kiefergelenkgeräusche"
      + "UND keine Angabe von Kiefergelenkgeräuschen durch den Pat. während "
      + "Untersuchung[U6 ODER U7]",
  }),
  4: jointCreak => ({
    id: 'dbs4',
    class: boolToClass(jointCreak),
    description: jointCreak
      ? "Öffnungs- und Schließknacken [U6] ODER Öffnungs- "
      + "oder Schließknacken [U6] UND Exkursives o. protrusives "
      + "Knacken [U7]"
      : " Kein Öffnungs- und Schließknacken [U6] UND kein Öffnungs- "
      + "oder Schließknacken [U6] ODER kein Exkursives o. protrusives "
      + "Knacken [U7]",
  }),
  5: frictionRub => ({
    id: 'dbs5',
    class: boolToClass(frictionRub),
    description: frictionRub
      ? "Reibegeräusch durch Untersucher ermittelt [U6 ODER U7]"
      : "Kein Reibegeräusch durch Untersucher ermittelt [U6 ODER U7]",
  }),
  7: lockjaw => ({
    id: 'dbs7',
    class: boolToClass(lockjaw),
    description: lockjaw
      ? "Aktuell intermittierende Kieferklemmen mit "
      + "Mundöffnungseinschränkung [SF11=ja & SF12=nein]"
      : "Keine aktuell intermittierende Kieferklemmen mit "
      + "Mundöffnungseinschränkung",
  }),
  8: openingFunction => ({
    id: 'dbs8',
    class: boolToClass(openingFunction),
    description: openingFunction
      ? "MPMÖ ≥ 40mm (inkl. Overbite) [U4C]"
      : "MPMÖ < 40mm (inkl. Overbite) [U4C]",
  }),
  10: reduction => ({
    id: 'dbs10',
    class: boolToClass(reduction),
    description: reduction
      ? "reponierbar"
      : "nicht reponierbar",
  }),
}

const dysfunctionBasedDiagnoses = {
  6: {
    id: 'dbd6',
    class: "failure",
    description: "Weitere Diagnosen untersuchen",
  },
  11: {
    id: 'dbd11',
    class: "diagnosis",
    description: "Diskusverlagerung mit Reposition",
  },
  12: {
    id: 'dbd12',
    class: "diagnosis",
    description: "Diskusverlagerung ohne Reposition, mit Mundöffnungseinschränkung",
  },
  13: {
    id: 'dbd13',
    class: "diagnosis",
    description: "Degenerative Gelenkerkrankung",
  },
  14: {
    id: 'dbd14',
    class: "diagnosis",
    description: "Diskusverlagerung mit Reposition mit intermittierender Kieferklemme",
  },
  15: {
    id: 'dbd15',
    class: "diagnosis",
    description: "Diskusverlagerung ohne Reposition, ohne Mundöffnungseinschränkung",
  },
}



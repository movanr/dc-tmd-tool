
class ExaminationTableFrame extends HTMLElement {

  connectedCallback() {
    // headline is given as attribute
    const headline = this.hasAttribute("headline")
      ? this.getAttribute("headline")
      : "HEADLINE";
    const id = this.hasAttribute("id")
      ? this.getAttribute("id")
      : "";
    // content is given as innerHTML 
    this.innerHTML = `
      <div class="container mb-3 px-0">
        <div class="shadow-sm bg-body-tertiary rounded" id="${id}-bg">
          <div class="row">
            <div class="col">
              <div class="mb-2 rounded-top text-light text-center bg-secondary">
                <b>${headline}</b>
              </div>
            </div>
          </div>
          <div class="row px-1">
            <div class="col">
              ${this.innerHTML}
            </div>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('examination-table-frame', ExaminationTableFrame);


class ExaminationTableContent extends HTMLElement {

  // Standard "Ja/Nein" table content
  connectedCallback() {
    // get first column label if exists
    const firstColLabel = this.hasAttribute("first-col-label")
      ? this.getAttribute("first-col-label")
      : "";
    // get first column witdh modifier (in case of long row labels)
    const firstColWidth = this.hasAttribute("first-col")
      ? this.getAttribute("first-col")
      : "";
    // get the headers
    const headers = this.getElementsByClassName("ex-table-header");
    // initialize headers
    var headersHTML = `<div class="col${firstColWidth} text-center"><b>${firstColLabel}</b></div>`;
    // initialize "Ja/Nein" labels (first column is empty)
    var headerLabelsHTML = `<div class="col${firstColWidth}"></div>`;
    for (const header of headers) {
      // add header columns to the header row
      headersHTML += `<div class="col">${header.innerHTML}</div>\n`;
    }
    for (let i = 0; i < headers.length; i++) {
      // add header label columns to the header labels row
      headerLabelsHTML += `
        <div class="col">
          <div class="row gx-2">
            <div class="col">
              Nein
            </div>
            <div class="col">
              Ja
            </div>
          </div>
        </div>
      `
    }

    // get table id
    const tableId = this.hasAttribute("table-id")
      ? this.getAttribute("table-id")
      : "";
    // get header count
    const headerCount = headers.length;
    // get the names of the rows from the HTML document
    const rowLabels = this.getElementsByClassName("ex-table-row");
    var overallRowHTML = '';
    // initialize row with overall 'Nein' button
    overallRowHTML += '<div class="row mb-2 px-2">';
    // label
    overallRowHTML += `<div class="col${firstColWidth}">Alle</div>\n`;
    for (let j = 0; j < headerCount; j++) {
      overallRowHTML += `
          <div class="col">
            <div class="row gx-2">
              <div class="col">
                <input class="form-check-input form-check-inline border-secondary" type="radio" id="${tableId}_overall_${j}" value="1">
              </div>
              <div class="col">
              </div>
            </div>
          </div>
        `;
    }
    overallRowHTML += '</div>'
    var rowsHTML = ''
    for (let i = 0; i < rowLabels.length; i++) {
      // start row
      rowsHTML += `<div class="row mb-2 px-2">`;
      // row label
      rowsHTML += `<div class="col${firstColWidth}">${rowLabels[i].innerHTML}</div>\n`;
      for (let j = 0; j < headerCount; j++) {
        if (rowLabels[i].hasAttribute("skip")) {
          // check if this header should be skipped
          if (rowLabels[i].getAttribute("skip").includes(j)) {
            // insert empty collumn
            rowsHTML += `<div class="col"></div>`
            continue;
          }
        }
        // row content (radio buttons for "Ja/Nein")
        rowsHTML += `
          <div class="col">
            <div class="row gx-2">
              <div class="col">
                <input class="form-check-input form-check-inline border-secondary" type="radio" name="${tableId}_${i}_${j}" id="${tableId}_${i}_${j}_0" value="0">
              </div>
              <div class="col">
                <input class="form-check-input form-check-inline border-secondary" type="radio" name="${tableId}_${i}_${j}" id="${tableId}_${i}_${j}_1" value="1">
              </div>
            </div>
          </div>
        `
      }
      // end row
      rowsHTML += `</div>`
    }
    this.innerHTML =
      // combine the header row and the header "Ja/Nein" labels row
      `
        <div class="row mb-1 px-2">
          ${headersHTML}
        </div>
      `
      +
      `
        <div class="row mb-1 px-2">
          ${headerLabelsHTML}
        </div>
      `
      + overallRowHTML
      // append the rows of the table
      + rowsHTML;
  }
}

customElements.define('examination-table-content', ExaminationTableContent);



class DiagnosisFrame extends HTMLElement {
  // Container with two rows: headline and content
  connectedCallback() {
    // headline is given as attribute
    const headline = this.hasAttribute("headline")
      ? this.getAttribute("headline")
      : "HEADLINE";
    // content is given as innerHTML 
    this.innerHTML = `
      <div class="container shadow-sm rounded px-0 bg-body-secondary">
        <div class="row">
          <div class="col">
            <div class="text-light text-center rounded-top bg-secondary border border-secondary">
              <b>${headline}</b>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            ${this.innerHTML}
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('diagnosis-frame', DiagnosisFrame);
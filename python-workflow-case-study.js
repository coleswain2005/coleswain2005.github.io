/* Scoped case study. Demo data is invented, not Excelta data. */
(() => {
  if (new URLSearchParams(location.search).get('project') !== 'python-workflow') return;
  document.getElementById('projectDescription').textContent = 'Developed a Python/pandas tool that transformed historical quote and bill-of-materials records into a searchable manufacturing-planning reference. A full or partial quote number returned associated components and whether CNC machining was required.';
  const specs = document.getElementById('projectSpecs');
  specs.replaceChildren();
  [['Historical quotes','10,000+'],['Data records','30,000+'],['Input','Quote number'],['Output','Parts + CNC status']].forEach(([k,v]) => {
    const div=document.createElement('div');div.className='project-detail-spec';
    const label=document.createElement('span');label.textContent=k;
    const strong=document.createElement('strong');strong.textContent=v;
    div.append(label,strong);specs.append(div);
  });
  document.getElementById('projectStory').hidden=true;
  const host=document.createElement('section');
  host.className='python-workflow-showcase';
  host.innerHTML=String.raw`
    <div class="py-section py-intro">
      <p class="project-detail-label">01 / Engineering objective</p>
      <h2>Turn historical quote data into manufacturing instructions</h2>
      <p>Excelta had more than 10,000 historical quotes involving hundreds of part numbers, each with different production requirements. I was tasked with organizing more than 30,000 quote–component records so that a planner could enter a quote number and identify the components and which ones required CNC machining.</p>
      <div class="py-flow" aria-label="Data processing sequence">
        <div><span>01</span><strong>Import</strong><small>Excel quote/BOM export</small></div>
        <div><span>02</span><strong>Normalize</strong><small>Clean identifiers and exclude accessories</small></div>
        <div><span>03</span><strong>Search</strong><small>Full or partial quote number</small></div>
        <div><span>04</span><strong>Classify</strong><small>Component + CNC requirement</small></div>
      </div>
    </div>
    <div class="py-section py-panel">
      <div class="py-heading"><div><p class="project-detail-label">02 / Interactive explanation</p><h2>Try the quote lookup</h2></div><span class="py-demo-label">Synthetic example</span></div>
      <p>This small browser demonstration illustrates the search and classification logic. All quote numbers, components, and results are invented examples; no Excelta data is loaded or exposed.</p>
      <form id="pyDemoForm" class="py-form">
        <label for="pyDemoInput">Quote number (partial matching allowed)</label>
        <div><input id="pyDemoInput" type="text" value="101" maxlength="25" spellcheck="false" autocomplete="off" placeholder="Enter 101, 202, or 999"><button type="submit">Look up parts →</button></div>
      </form>
      <div class="py-examples">Try: <button type="button" data-example="101">101</button><button type="button" data-example="202">202</button><button type="button" data-example="999">999</button></div>
      <div id="pyDemoOutput" class="py-results" aria-live="polite"></div>
      <p class="py-footnote">Illustrative input and output only. Not connected to internal systems.</p>
    </div>
    <div class="py-section py-panel">
      <p class="project-detail-label">03 / Design and implementation</p>
      <h2>Four steps in the Python workflow</h2>
      <div class="py-steps">
        <div><span>01 / DATA</span><h3>Extract & standardize</h3><p>Load selected Excel columns into pandas, rename the fields, remove quote prefixes, and normalize product IDs.</p></div>
        <div><span>02 / FILTER</span><h3>Keep primary components</h3><p>Exclude non-primary part families such as grips and springs before classifying manufacturing operations.</p></div>
        <div><span>03 / QUERY</span><h3>Search by quote</h3><p>Accept full or partial quote input and select matching quote–component rows.</p></div>
        <div><span>04 / OUTPUT</span><h3>Flag CNC requirements</h3><p>Compare component identifiers with the CNC-required set and display readable quote, part, and status columns.</p></div>
      </div>
      <div class="py-code-heading"><h3>Representative algorithm</h3><small>Adapted from my JupyterLab notebook screenshots</small></div>
      <pre class="py-code"><code># Standardize the quote-component table
data = pd.read_excel("quotes.xlsx", usecols=[1, 2])
data.columns = ["quote", "part"]
data["quote"] = data["quote"].astype(str).str.upper()
data["part"] = data["part"].astype(str).str.strip().str.upper()

# Search and classify a complete or partial quote
matches = data[data["quote"].str.contains(
    query, regex=False, na=False
)].copy()
matches["cnc_status"] = matches["part"].apply(
    lambda part: "CNC REQUIRED" if part in cnc_parts else "No CNC"
)
print(matches[["quote", "part", "cnc_status"]].to_string(index=False))</code></pre>
      <p class="py-footnote">This shortened excerpt shows the core algorithm, not the complete original notebook. Internal part classifications, filenames, and company records are deliberately omitted.</p>
    </div>
    <div class="py-section py-panel">
      <p class="project-detail-label">04 / Results and validation</p>
      <h2>A functioning manufacturing-planning lookup</h2>
      <p>The final notebook accepted quote-number input and returned matched components with CNC-required or no-CNC classifications. Successful outputs are documented in the supplied screenshots. It demonstrates Python data wrangling applied to a real production-planning problem.</p>
      <div class="py-results-grid">
        <div><h3>Functional result</h3><p>Quote search, component retrieval, and CNC classification in one repeatable workflow.</p></div>
        <div><h3>Debugging</h3><p>Resolved an undefined-variable error and a pandas chained-assignment warning by explicitly copying filtered rows.</p></div>
        <div><h3>Evidence limit</h3><p>No measured before-and-after time study was provided, so no numerical workflow speedup is claimed.</p></div>
      </div>
    </div>`;
  document.getElementById('projectReturn').before(host);
  const rows=[
    ['DEMO-101','COMP-A',true],['DEMO-101','COMP-B',false],
    ['DEMO-102','COMP-C',true],['DEMO-202','COMP-D',false],
    ['DEMO-202','COMP-E',true],['DEMO-303','COMP-F',false]
  ];
  const input=document.getElementById('pyDemoInput');
  const output=document.getElementById('pyDemoOutput');
  function render(){
    output.replaceChildren();
    const query=input.value.trim().toUpperCase();
    const matches=query?rows.filter(row=>row[0].includes(query)):[];
    if(!matches.length){
      const p=document.createElement('p');p.className='py-none';p.textContent=query?'No matching sample quote. Try 101 or 202.':'Enter a quote number to search.';output.append(p);return;
    }
    const p=document.createElement('p');p.className='py-summary';p.textContent=matches.length+' components found in synthetic quote data';output.append(p);
    const table=document.createElement('table');
    const head=document.createElement('thead');const tr=document.createElement('tr');
    ['Quote','Part','CNC status'].forEach(name=>{const th=document.createElement('th');th.textContent=name;tr.append(th)});
    head.append(tr);table.append(head);
    const body=document.createElement('tbody');
    matches.forEach(row=>{
      const tr=document.createElement('tr');
      row.slice(0,2).forEach(value=>{const td=document.createElement('td');td.textContent=value;tr.append(td)});
      const td=document.createElement('td');const badge=document.createElement('span');badge.className=row[2]?'py-required':'py-no-cnc';badge.textContent=row[2]?'CNC REQUIRED':'No CNC';td.append(badge);tr.append(td);body.append(tr);
    });table.append(body);output.append(table);
  }
  document.getElementById('pyDemoForm').addEventListener('submit',event=>{event.preventDefault();render()});
  document.querySelectorAll('.py-examples button').forEach(button=>button.addEventListener('click',()=>{input.value=button.dataset.example;render();input.focus()}));
  render();
})();
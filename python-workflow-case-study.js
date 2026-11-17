/* Python manufacturing workflow case study and sample quote lookup. */
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
      <div class="py-heading"><div><p class="project-detail-label">02 / Interactive explanation</p><h2>Try the quote lookup</h2></div><span class="py-demo-label">Sample data</span></div>
      <p>Enter a quote number to see how component matching and CNC classification work. This demo uses sample data rather than company records.</p>
      <form id="pyDemoForm" class="py-form">
        <label for="pyDemoInput">Quote number (partial matching allowed)</label>
        <div><input id="pyDemoInput" type="text" value="101" maxlength="25" spellcheck="false" autocomplete="off" placeholder="Enter 101, 202, or 999"><button type="submit">Look up parts →</button></div>
      </form>
      <div class="py-examples">Try: <button type="button" data-example="101">101</button><button type="button" data-example="202">202</button><button type="button" data-example="999">999</button></div>
      <div id="pyDemoOutput" class="py-results" aria-live="polite"></div>
      <p class="py-footnote">Example records for demonstrating the lookup interface.</p>
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
      <div class="py-code-heading"><h3>Python implementation</h3><small>JupyterLab · pandas</small></div>
      <p>The script is organized into three stages: cleaning the quote/BOM data, matching quotes to components, and identifying CNC requirements.</p>

      <div class="py-notebook">
        <div class="py-notebook-top"><span class="py-notebook-dot"></span><span class="py-notebook-dot"></span><span class="py-notebook-dot"></span><strong>Manufacturing quote lookup</strong><span>Python 3 · pandas · JupyterLab</span></div>
        <div class="py-notebook-cell">
          <div class="py-notebook-sidebar"><span>In [1]:</span></div>
          <div class="py-notebook-main">
            <div class="py-cell-header"><span>01 / Data preparation</span><button type="button" class="py-copy-code">Copy code</button></div>
            <pre class="py-code py-highlight"><code>import pandas as pd

data = pd.read_excel(
    "QuoteBOM.xlsx", sheet_name="Sheet1",
    header=None, usecols=[1, 2]
)
data.columns = ["Q_Number", "Product_Number"]

# Standardize quote numbers and part identifiers
data["Q_Number"] = (
    data["Q_Number"].astype(str).str.upper()
    .str.replace(r"^Q-?|Q", "", regex=True)
)
data["Product_Number"] = (
    data["Product_Number"].astype(str).str.strip()
    .str.upper().str.replace("-", "", regex=False)
)

# Focus the lookup on primary manufactured components
EXCLUDED_PREFIXES = ("GP", "SP", "DUR", "MISC",
                     "SEMITRON", "ONLINE", "316")
data = data[~data["Product_Number"].str.startswith(
    EXCLUDED_PREFIXES
)].copy()

cnc_required_parts = {
    "B2F", "B3F", "B3LF", "B3",
    "9I", "9ILF", "9IL", "9AIF"
}</code></pre>
          </div>
        </div>
        <div class="py-notebook-cell">
          <div class="py-notebook-sidebar"><span>In [2]:</span></div>
          <div class="py-notebook-main">
            <div class="py-cell-header"><span>02 / Quote lookup function</span><button type="button" class="py-copy-code">Copy code</button></div>
            <pre class="py-code py-highlight"><code>def Q_P_CNC(data, cnc_required_parts):
    # Search a full or partial quote number
    user_input_q = input(
        "Enter a Quote number (partial match allowed): "
    ).strip().upper()

    input_q_rows = data[
        data["Q_Number"].str.contains(
            user_input_q, regex=False, na=False
        )
    ].copy()

    if input_q_rows.empty:
        print("No matching Quote found.")
        return

    # Classify each matching primary component
    input_q_rows["CNC_Status"] = (
        input_q_rows["Product_Number"].apply(
            lambda p: "CNC REQUIRED"
            if p in cnc_required_parts else "No CNC"
        )
    )
    print(input_q_rows[
        ["Q_Number", "Product_Number", "CNC_Status"]
    ].to_string(index=False))</code></pre>
          </div>
        </div>
        <div class="py-notebook-cell py-notebook-last">
          <div class="py-notebook-sidebar"><span>In [3]:</span><span class="py-notebook-out">Out:</span></div>
          <div class="py-notebook-main">
            <div class="py-cell-header"><span>03 / Run & inspect results</span><button type="button" class="py-copy-code">Copy code</button></div>
            <pre class="py-code py-highlight"><code>Q_P_CNC(data, cnc_required_parts)</code></pre>
            <div class="py-notebook-output" aria-label="Quote lookup output">
              <div class="py-output-label">Quote lookup output</div>
              <pre>Enter a Quote number (partial match allowed): 101
Q_Number  Product_Number      CNC_Status
   2101A           9ILF    CNC REQUIRED</pre>
            </div>
          </div>
        </div>
      </div>

      <div class="py-code-takeaways">
        <div><strong>Why normalize first?</strong><p>Consistent part identifiers make exact membership tests against the CNC-required set possible.</p></div>
        <div><strong>Why copy the filtered rows?</strong><p>The final notebook resolved the pandas <code>SettingWithCopyWarning</code> by creating an explicit copy before adding the status column.</p></div>
      </div>
      
    </div>
    <div class="py-section py-panel">
      <p class="project-detail-label">04 / Results and validation</p>
      <h2>A functioning manufacturing-planning lookup</h2>
      <p>The finished tool accepts a quote number and displays matching components with their CNC-required or no-CNC classifications, replacing repetitive manual searches through BOM records.</p>
      <div class="py-results-grid">
        <div><h3>Functional result</h3><p>Quote search, component retrieval, and CNC classification in one repeatable workflow.</p></div>
        <div><h3>Debugging</h3><p>Resolved an undefined-variable error and a pandas chained-assignment warning by explicitly copying filtered rows.</p></div>
        <div><h3>Practical application</h3><p>The result connects quote history with manufacturing requirements to support production planning and quoting decisions.</p></div>
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
    const p=document.createElement('p');p.className='py-summary';p.textContent=matches.length+' components found in sample data';output.append(p);
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
  // Lightweight, dependency-free notebook syntax presentation and copy controls.
  host.querySelectorAll('.py-highlight code').forEach(code => {
    const original = code.textContent;
    const escape = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const tokenRE = /(#.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|\b(def|return|if|else|lambda|import|as|in|not|True|False|None)\b|\b(print|input|str|tuple)\b/gm;
    let html = '', previous = 0, match;
    while ((match = tokenRE.exec(original)) !== null) {
      html += escape(original.slice(previous, match.index));
      const cls = match[1] ? 'py-syntax-comment' : match[2] ? 'py-syntax-string' : match[3] ? 'py-syntax-keyword' : 'py-syntax-builtin';
      html += '<span class="' + cls + '">' + escape(match[0]) + '</span>';
      previous = tokenRE.lastIndex;
    }
    html += escape(original.slice(previous));
    code.innerHTML = html;
    code.dataset.copySource = original;
  });
  host.querySelectorAll('.py-copy-code').forEach(button => button.addEventListener('click', async () => {
    const source = button.closest('.py-notebook-main').querySelector('code').dataset.copySource;
    try {
      await navigator.clipboard.writeText(source);
      button.textContent = 'Copied';
      button.blur();
    } catch {
      button.textContent = 'Select code to copy';
    }
  }));
  render();
})();
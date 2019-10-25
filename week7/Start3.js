// <div class="card">
//     <div>
//     <label ><input id="topic1" value="html" name="topics" type="checkbox" name="">
//     HTML</label>
//     <div class="metadata">Questions Mastered: 32/100</div>
// <progress value="32" max="100">
//     </div>
//     <hr>

for(let item in topics) {
    console.log(item);
    console.log(topics[item]);


    const topicList = document.querySelector("#topicList");
//create item
    const item = document.createElement("div");
    topicList.appendChild(item);

//create rule
    const rule = document.createElement("hr");
    topicList.appendChild(rule);

//create label
    const label = document.createElement("label");
    item.appendChild(label);

//create label
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "topics");
    item.appendChild(checkbox);

//create label text
    const labeltext = document.createTextNode("HTML");
    label.appendChild(labeltext);

//create matadata

}
// <div class="card" id="topicList">
// <div>
//   <label >
//     <input id="topic1" value="html" name="topics" type="checkbox" name="">HTML
//   </label>
//   <div class="metadata">Questions Mastered: 32/100</div>
//   <progress value="32" max="100">
// </div>
//     <hr>

    const topicList = document.querySelector(".card");
//create item
    const item = document.createElement("div");
// add div inside of topList
    topicList.appendChild(item);

    for(let item in topics) {
        console.log(item);
        console.log(topics[item]);

//create label
    const label = document.createElement("P");
    item.appendChild(label);
    label.innerHTML = "HTML";
//create metadata inside of item
    const metadata = document.createElement("div");
    item.appendChild(metadata);
    metadata.innerHTML = "Questions Mastered: 32/100";

//create progress bar inside of item
    const progress = document.createElement("progress");
    item.appendChild(progress);
    progress.setAttribute("value",24);
    progress.setAttribute("value",100);


//create input in label
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "topics");
    label.appendChild(checkbox);

//create rule
    const rule = document.createElement("hr");
    topicList.appendChild(rule);

//create label text
    const labelText = document.createTextNode("topicItem");
    label.appendChild(labelText);


}
async function getData() {
  let res = await fetch("http://localhost:3500/result");
  let data = await res.json();

  console.log(data);
  let showdata = document.getElementById("showdata");

  data.forEach(({ name, id, img }) => {
    let pid = document.createElement("p");
    pid.innerText = id;
    let pname = document.createElement("p");
    pname.innerText = name;
    let image = document.createElement("img");
    image.src = img;

    let data_div = document.createElement("div");
    data_div.append(id, name, image);
    showdata.append(data_div);
  });
}

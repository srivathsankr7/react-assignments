let count = 0;
const counter = () => {
  count = count + 1;
  document.getElementById("head").innerHTML = "count is " + count;
};

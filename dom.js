/* CHALLENGE 1
1. Find the second paragraph on the page
2. Add a class of "highlight", or
3. Remove the class of "highlight" if already present
e.g. "<p class="para">Hello</p>" -> "<p class="para highlight">Hello</p>"
*/
function toggleHighlight() {
  if (hl.className === "highlight"){
    hl.className= "highlight2";
  }
  else {
    hl.className= "highlight";
  }
}

/* CHALLENGE 2
1. Take an array of strings as a parameter
1. Return a new `ul` containing an `li` containing a string for each element in the array
e.g. generateList(["hello", "world"]) -> <ul>
                                           <li>hello</li>
                                           <li>world</li>
                                          </ul>
*/
function generateList(array) {
  array.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}

/* CHALLENGE 3a
1. Take a `textarea` element as a parameter
2. Count how many characters have been typed into it
3. If it contains > 140 characters set the `aria-invalid="true"` attribute
*/
function validateTweet(textarea) {
  length = textarea.value.length;
  console.log(length);
  if (length > 140){
    tweet.setAttribute("aria-invalid", "true");
  }
  else {
    tweet.removeAttribute("aria-invalid");
  }
}

/* CHALLENGE 3b
1. Find the textarea with ID "tweet"
2. Whenever a user types into it validate it using the previous function
*/
function validateTweetOnInput() {
  const vTweet = document.getElementById("tweet");
  vTweet.addEventListener('click', validateTweet());
}

/* CHALLENGE 4
1. Find all buttons with a classname of "toggle-button"
2. When each button is clicked show/hide the next sibling following the button
e.g. <button class="toggle-button">Toggle</button>
     <p>This should appear/disappear when the button is clicked</p>
*/
function setupToggleButtons(p) {

}

function toggle1Hide () {
  if (p1.style.display === "none") {
    p1.style.display = "block";
  } else {
    p1.style.display = "none";
  }
}
function toggle2Hide () {
  if (p2.style.display === "none") {
    p2.style.display = "block";
  } else {
    p2.style.display = "none";
  }
}
function toggle3Hide () {
  if (p3.style.display === "none") {
    p3.style.display = "block";
  } else {
    p3.style.display = "none";
  }
}
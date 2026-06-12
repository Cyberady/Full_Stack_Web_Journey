async function getBoredActivity() {
    const response = await fetch("https://apis.scrimba.com/bored/api/activity");
    const data = response.json();
    console.log(data);
}

getBoredActivity();
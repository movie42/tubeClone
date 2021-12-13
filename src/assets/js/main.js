import "../scss/styles.scss";

async function response() {
  const data = await fetch(
    "https://yangchungarchive.azurewebsites.net/userlogin/rhgustn",
    { method: "GET" }
  );

  await data.json();
}
response();

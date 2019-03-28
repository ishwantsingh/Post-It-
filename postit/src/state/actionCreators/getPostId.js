export default function getPostId(event) {
  const postLink = event.currentTarget.parentElement.parentElement.parentElement
    .querySelector("a")
    .href.split("/");
  const currentPostId = postLink[postLink.length - 1];
  return {
    type: "SET_ID",
    payload: currentPostId
  };
}

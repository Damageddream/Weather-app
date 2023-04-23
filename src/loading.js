const loading = (() => {
  const button = document.querySelector("button");

  const startLoading = () => {
    button.innerText = "loading...";
  };

  const stopLoading = () => {
    button.innerText = "search";
  };

  return { startLoading, stopLoading };
})();

export default loading;

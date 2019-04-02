export function getUsefulContents(url, callback) {
  getJSON(url, data => callback(JSON.parse(data)));
}

export const english = {"welcomeMsg": "Welcome to our World"}

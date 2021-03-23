export const extractUserIdFromToken = (token)=>{
  return JSON.parse(window.atob(token.split(".")[1])).payload
}
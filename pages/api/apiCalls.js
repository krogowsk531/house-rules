// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const getGames = async () => {
  const promise =  await fetch(`https://api.boardgameatlas.com/api/search?order_by=popularity&client_id=REACT_APP_KEYCODE`)
  return await promise.json()
}
//
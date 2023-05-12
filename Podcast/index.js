export const Podcast = (props)=>{
    return `
    <div class="episode">
    <div class="episode__num">${props.num}</div>
    <div class="episode__body">
      <div class="episode__title">${props.title}</div>
      <div class="episode__guest">host: ${props.guest}</div>
    </div>
  </div>
  `
}
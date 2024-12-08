const tileQuantity = 2000

const tiles = document.querySelector(".tiles")

const symboles = ["middle-circle", "outside-circle", "corner-circle", "triangle", "square"]
const randomSymbol = () => symboles[Math.floor(Math.random() * symboles.length)]
/* orientation must be a random multiple of 90 beetween 0 and 360 */
const randomOrientation = () => Math.floor(Math.random() * 4) * 90

const randomPalette = async () => {
  const colors = await fetch("https://unpkg.com/nice-color-palettes@3.0.0/100.json").then(response => response.json())
  const palette = colors[Math.floor(Math.random() * colors.length)]
  return palette
}

const palette = await randomPalette()
/* need a ranom size between 3rem and 6rem */
const randomSize = () => Math.floor(Math.random() * 3) + 3

document.body.style.setProperty("--tile-size", `${randomSize()}rem`)
document.body.style.setProperty("--bg-color", palette[0])

for (let i = 0; i < tileQuantity; i++) {
  const tile = document.createElement("div")
  tile.classList.add("tile")
  tile.classList.add(randomSymbol())

  const randomColor = () => palette[Math.floor(Math.random() * palette.length)]
  tile.style.setProperty("--bg-color", randomColor())
  tile.style.setProperty("--first-color", randomColor())
  tile.style.setProperty("--second-color", randomColor())
  tile.style.setProperty("--third-color", randomColor())
  tile.style.setProperty("--fourth-color", randomColor())
  tile.style.setProperty("--orientation", `${randomOrientation()}deg`)

  tiles.append(tile)
}

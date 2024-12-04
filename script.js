const tileQuantity = 10

const tiles = document.querySelector(".tiles")

const symboles = ["middle-circle", "outside-circle"]
const randomSymbol = () => symboles[Math.floor(Math.random() * symboles.length)]
/* orientation must be a random multiple of 90 beetween 0 and 360 */
const randomOrientation = () => Math.floor(Math.random() * 4) * 90

for (let i = 0; i < tileQuantity; i++) {
  const tile = document.createElement("div")
  tile.classList.add("tile")
  tile.classList.add(randomSymbol())
  tile.style.setProperty("--orientation", `${randomOrientation()}deg`)
  tiles.append(tile)
}

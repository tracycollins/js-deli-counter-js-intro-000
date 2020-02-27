function takeANumber(deliLine, name) {
  deliLine.push(name)
  return(`Welcome, ${name}. You are number ${deliLine.length} in line.`)
}
function nowServing(deliLine) {
  if (deliLine.length === 0){
    return ("There is nobody waiting to be served!")
  }
  var serving = deliLine.shift()
  return(`Currently serving ${serving}.`)
}

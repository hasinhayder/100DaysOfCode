// 100OfDaysCode - Day 2: Display Word Meanings on DoubleClick in any HTML file on the browser
// Add this script in your HTML file as <script src='lookup-engine.js'></script>
// Open developer console
// Doubleclick on any word :)

class TinyLookup {
  engage() {
    const that = this
    document.ondblclick = function () {
      var selection = (document.selection && document.selection.createRange().text) || 
        (window.getSelection && window.getSelection().toString())
      that.lookup(selection)
    }
  }

  lookup(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    fetch(url)
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((data) => {
        console.log(`%c${word}`, `background: #FFDC00; color: #000000; font-size: 14px; padding: 5px;`)
        data[0]?.meanings.map((meaning) => {
          meaning.definitions.map((def) => {
            console.log(def.definition)
          })
        })
        console.log("\n")
      })
      .catch(() => {
        console.log(`%c unknown word ${word}`, `background: #FF0000; color: #FFFFFF; font-size: 14px; padding: 5px;`)
      })
  }
}

new TinyLookup().engage()
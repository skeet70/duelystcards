import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import store from 'store/store'
import { toggleProperty, setProperty } from 'store/actions'

import axios from 'axios'
import credentials from '../../credentials.js'

function getImage () {
  const element = document.querySelector('.horizontal-deck')
  return domtoimage.toBlob(element)
}

export const saveToComputer = async (currentFaction) => {
  try {
    ga('send', 'event', 'Save deck', 'Computer', 'horizontal')
    toggleProperty(store, 'savingDeck')
    const image = await getImage()
    saveAs(image, `${currentFaction}-deck.png`)
    toggleProperty(store, 'savingDeck')
  } catch (error) {
    toggleProperty(store, 'savingDeck')
  }
}

export const saveToImgur = async () => {
  try {
    ga('send', 'event', 'Save deck', 'Imgur', 'horizontal')
    toggleProperty(store, 'savingDeck')
    const image = await getImage()
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onloadend = async () => {
      axios.defaults.headers.common['Authorization'] = `Client-ID ${credentials.imgur.clientId}`
      const imgur = await axios.post('https://api.imgur.com/3/image', { image: reader.result.split(',')[1], type: 'base64' })
      setProperty(store, { property: 'imgurLink', value: imgur.data.data.link })
      setProperty(store, { property: 'imgurHash', value: window.location.hash })
      toggleProperty(store, 'imgurModal')
      toggleProperty(store, 'savingDeck')
    }
  } catch (error) {
    toggleProperty(store, 'savingDeck')
  }
}

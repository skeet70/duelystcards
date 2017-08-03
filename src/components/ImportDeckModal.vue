<template>
  <general-modal :show="modal" width="500px" :close="closeModal">
    <div class="import-deck-modal">
      <h1>Import Duelystcards Deck</h1>
      <p>Paste the URL of the deck you want to import. The deck must contain a general for successful import.</p>
      <p v-if="error">There was an issue importing the deck. Please make sure the URL is correct and that the exported deck has a general.</p>
      <input class="input" ref="url" type="text" placeholder="Insert URL" />
      <button class="success" @click="handleDuelystcardsImport()">Import</button>
      <button class="cancel" @click="closeModal()">Cancel</button>

      <h1>Import Duelyst Deck</h1>
      <p>Paste the hash generated after clicking export in game while editing a deck.</p>
      <p v-if="error">There was an issue importing the deck. Please make sure the hash was copied correctly and that the exported deck has a general.</p>
      <input class="input" ref="hash" type="text" placeholder="Insert hash" />
      <button class="success" @click="handleDuelystImport()">Import</button>
      <button class="cancel" @click="closeModal()">Cancel</button>

      <h1>Export Duelyst Deck</h1>
      <p>Copy this string and paste it in the in-game import field. Note that the sideboard won't be included.</p>
      <pre>{{generateDuelystHash()}}</pre>
    </div>
  </general-modal>
</template>

<script>
  import GeneralModal from 'components/GeneralModal'
  import { duelystToDuelystCardsHash, duelystCardsToDuelystHash } from '../utils/hashing'
  import { mapState, mapActions } from 'vuex'

  export default {
    data () {
      return {
        error: false,
      }
    },

    computed: {
      ...mapState({ modal: ({ app }) => app.importDeck }),
    },

    watch: {
      modal () {
        if (this.$store.state.app.importDeck) {
          this.$nextTick(() => {
            this.$refs.url.focus()
          })
        }
      },
    },

    methods: {
      ...mapActions('app', ['toggleProperty']),

      closeModal () {
        this.toggleProperty('importDeck')
        this.error = false
        this.$refs.url.value = ''
      },

      generateDuelystHash() {
        return duelystCardsToDuelystHash(window.location.hash.slice(1))
      },

      async handleDuelystImport() {
        try {
          this.error = false
          const duelystHash = this.$refs.hash.value
          if (!duelystHash) return

          const ourHash = duelystToDuelystCardsHash(duelystHash)

          await this.$store.dispatch('deck/clearDeck')
          const faction = await this.$store.dispatch('deck/loadDeck', ourHash)

          this.$router.push({ path: `/#${ourHash}`} )
          this.closeModal()
        } catch (e) {
          this.error = true
        }
      },

      async handleDuelystcardsImport () {
        try {
          this.error = false
          const url = this.$refs.url.value
          if (!url) return

          const hash = url.split(/(#|build=|deckList=)/).pop()

          await this.$store.dispatch('deck/clearDeck')
          const faction = await this.$store.dispatch('deck/loadDeck', hash)

          this.$router.push({ path: `/#${hash}`} )
          this.closeModal()
        } catch (e) {
          this.error = true
        }
      },
    },

    components: {
      GeneralModal,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .import-deck-modal {
    padding: 30px;

    > .input {
      background: rgba(#000, 0.9);
      border: 1px solid $blue;
      color: $light;
      width: 100%;
      padding: 8px;
      margin-bottom: 15px;

      &:focus {
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
      }
    }
  }

  button.success {
    cursor: pointer;
    background: $blue-light;
  }

  button.cancel {
    cursor: pointer;
    background: $gray-dark;
  }
</style>

function() {
    var e = {}
      , t = this.model.get("cards")
      , n = 1;
    for (var r in t) {
        var i = t[r].id;
        i = d.getBaseCardId(i);
        var s = a.CardFactory.cardForIdentifier(i, a.GameSession.getInstance());
        s.getType() === a.CardType.Unit && s.getIsGeneral() ? n = i : e[i] ? e[i]++ : e[i] = 1
    }
    if (n) {
        var o = "1:" + n;
        for (var l in e)
            o += ",",
            o += e[l] + ":" + l;
        var c = btoa(o);
        this.ui.$deckCardIds.val("[" + this.model.get("name") + "]" + c).popover({
            trigger: "focus"
        }).focus().select()
    }
}
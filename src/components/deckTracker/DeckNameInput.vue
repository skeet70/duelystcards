<template>
  <div class="deck-name-input">
    <template v-if="editing">
      <input ref="input" class="input" v-if="editing" v-model="newName" @keypress.enter="handleUpdate" @blur="handleUpdate" />
    </template>
    <template v-else>
      <p v-if="deck.name && deck.name.length" :class="['text', { 'editable': canEditDeck }]" @click="handleEditing">{{ deck.name }}</p>
      <p v-else :class="['empty', { 'editable': canEditDeck }]" @click="handleEditing">Deck name</p>
    </template>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    props: ['deck'],

    data() {
      return {
        newName: this.deck.name || '',
        editing: false,
        disabled: false,
      };
    },
    
    computed: {
      ...mapGetters('deckTracker', ['canEditDeck']),
    },

    methods: {
      ...mapActions('deckTracker', ['updateDeck']),

      handleEditing() {
        if (!this.canEditDeck) return
        this.editing = true
        this.$nextTick(() => {
          this.$refs.input.focus()
        })
      },

      async handleUpdate() {
        try {
          this.disabled = true
          await this.updateDeck({ id: this.deck._id, update: { name: this.newName }});
          this.disabled = false
        } catch (error) {
          this.disabled = false
        }
        this.editing = false
      },
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .deck-name-input {
    > .input {
      width: 100%;
      background: none;
      color: $light;
      border: none;
      font-size: 3rem;
      width: 100%;
      text-align: center;
      border-bottom: 1px solid lighten($blue-dark, 10%);

      &:focus {
        outline: none;
      }
    }

    > .text {
      font-size: 3rem;
      text-align: center;
      margin: 1px 0;
      border-bottom: 1px solid transparent;

      &.editable {
        cursor: pointer;
      }
    }

    > .empty {
      font-size: 3rem;
      text-align: center;
      margin: 1px 0;
      opacity: .5;

      &.editable {
        cursor: pointer;
        border-bottom: 1px solid transparent;

        &:hover {
          opacity: .7;
          border-bottom: 1px solid lighten($blue-dark, 10%);
        }
      }

    }
  }

</style>
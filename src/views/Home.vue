<template>
  <div class="container">
    <div v-if="profile.user">
        <p>
            Full name: {{ fullName }}
        </p>
        <p>
            Email: {{ email }}
        </p>
    </div>
    <div v-if="profile.error">
        Oops an error occured
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {mapState, mapGetters, mapActions} from 'vuex'
import { ProfileState, User } from '@/store/profile/types';
const namespace: string = 'profile';

export default Vue.extend({
  name: 'home',
  components: {
  },
  computed: {
    ...mapState(['profile']),
    ...mapGetters(namespace, ['fullName', 'user']),
    user(): User {
      return this.$store.state.profile.user
    },
    email(): string {
      const user = this.user || {email: ''}
      return user.email;
    }
  },
  methods: {
    ...mapActions(namespace, ['fetchData'])
  },
  mounted() {
    this.fetchData()

    // this.$store.dispatch('fetchData', "dwedw")
  }
});
</script>

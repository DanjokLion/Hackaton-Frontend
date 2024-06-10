  <template>
    <router-view />
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'App'
  });
  </script>

<style lang="scss">
  body {
    font-family: 'Roboto', sans-serif;
    background: url('@/assets/background.jpg') no-repeat center center fixed;
    background-size: cover;
  }

  .q-card {
    background: rgba(255, 255, 255, 0.7);
  }

</style>
  
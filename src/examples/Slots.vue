<template>
  <div>
    <h2>Slots</h2>
    <header>
        <!-- Los slots con nombre deben ser empleados con v-slot -->
        <slot name="header"></slot>
    </header>
    <main>
        <!-- Este es el slot por defecto -->
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Slots'
};
</script>
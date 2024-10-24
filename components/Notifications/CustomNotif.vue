<script setup>
const props = defineProps({
  item: Object, 
})

console.log(props.item) 
</script>


<template>
  <!--
    <div
    class="Wrapper"
    :data-type="item.type"
    >
    <div class="Content">
    <img
    :src="item.props.imgUrl"
    :alt="item.props.imgAlt"
    width="32"
    height="32"
    >

    <div
    :role="item.ariaRole"
    :aria-live="item.ariaLive"
    >
    <h3>{{ item.title }}</h3>
    <p>{{ item.message }}</p>
    </div>
    </div>

    <nav>
    <button
    type="button"
    class="ButtonOutline"
    @click="item.destroy"
    >
    Destroy
    </button>
    <button
    type="button"
    @click="item.clear"
    >
    Dismiss
    </button>
    </nav>
    </div> 
  -->

  <div class="space-y-5">
    <div class="relative mx-auto max-w-[400px] rounded-md border border-slate-50 bg-white p-4 text-sm shadow-lg">
      <div class="Content">
        <img
          :src="item.props.imgUrl"
          :alt="item.props.imgAlt"
          width="32"
          height="32"
        >

        <div
          :role="item.ariaRole"
          :aria-live="item.ariaLive"
        >
          <h3>{{ item.title }}</h3>
          <p>{{ item.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
[data-type='success'] {
  --accent: #059669;
}

[data-type='info'] {
  --accent: #5e50ff;
}

.Wrapper {
  --spacing: 0.75rem;

  width: 340px;
  max-width: 100%;
  /* 🖕 Make it responsive */

  background-color: #fff;
  border-radius: 0.75rem;
  padding: var(--spacing);
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  border-left: 6px solid var(--accent);
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
}

.Content {
  display: flex;
  gap: var(--spacing);
}

nav {
  margin-top: var(--spacing);
  display: flex;
  gap: var(--spacing);
  justify-content: flex-end;
}

button {
  background-color: var(--accent);
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.425rem var(--spacing);
  font-weight: 700;
  cursor: pointer;
  transition: opacity 200ms ease-out;
}

button:hover {
  opacity: 0.5;
}

.ButtonOutline {
  border: 2px solid var(--accent);
  background-color: white;
  color: var(--accent);
}
</style>

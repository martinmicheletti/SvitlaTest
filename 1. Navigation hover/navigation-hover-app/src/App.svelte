<script>
  let activeItem = "Branding";
  let hoveredItem = null;
  const items = ["Animation", "Branding", "Illustration"];
  function setActive(item) {
    activeItem = item;
  }
</script>

<main>
  <nav
    aria-label="Main navigation"
    class="min-h-screen flex items-center justify-center flex-wrap bg-gradient-to-t from-[#020C41] to-black font-sans"
  >
    <ul class="flex gap-4 relative flex-wrap justify-center" role="menubar">
      {#each items as item}
        <li
          class="text-gray-500 text-2xl relative transition-colors duration-300 cursor-pointer py-6 px-6 font-bold
               {activeItem === item ? 'text-white' : ''}
               hover:text-white"
          role="menuitem"
          on:click={() => setActive(item)}
          on:mouseenter={() => (hoveredItem = item)}
          on:mouseleave={() => (hoveredItem = null)}
        >
          {item}
          <div
            class="absolute bottom-0 w-1/3 left-1/2 -translate-x-1/2 scale-x-0
                 h-[4px] bg-white rounded transition-transform duration-300
                 {activeItem === item || hoveredItem === item
              ? 'scale-x-100'
              : ''}"
          />
        </li>
      {/each}
    </ul>
  </nav>
</main>

<style>
</style>

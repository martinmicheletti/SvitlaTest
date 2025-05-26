<script>
  import { onMount } from "svelte";

  let tasks = [
    { text: "Buy new sweatshirt", completed: true },
    { text: "Read an article", completed: true },
    { text: "Write blog post", completed: false },
    { text: 'Watch "Mr Robot"', completed: false },
    { text: "Run", completed: false },
  ];

  let newTask = "";
  let currentDate = "";

  onMount(() => {
    const now = new Date();
    const options = { weekday: "long", month: "long", day: "numeric" };
    currentDate = now.toLocaleDateString("en-US", options);
  });

  const addTask = () => {
    if (!newTask.trim()) return;

    tasks = [...tasks, { text: newTask, completed: false }];
    newTask = "";
  };

  const toggleTask = (index) => {
    tasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTask();
  };
</script>

<main>
  <div class="flex justify-center items-center min-h-screen bg-[#f0efea]">
    <div class="bg-white w-80 shadow-md">
      <!-- Header -->
      <div
        class="p-8 flex flex-col items-center gap-2 border-b-2 border-[#f0f0f0] font-semibold"
      >
        <h1 class="text-[#4c5c68] text-4xl font-extrabold m-0">December</h1>
        <p class="text-[#adb1de] text-base mt-1">Tuesday, December 22</p>
      </div>

      <!-- Task List -->
      <ul class="p-2 mt-2 list-none">
        {#each tasks as task, index}
          <li class="p-2 flex items-center justify-between">
            <span
              class:text-[#ccc]={task.completed}
              class:line-through={task.completed}
              class="text-[#4c5c68] text-sm font-roboto"
            >
              {task.text}
            </span>
            <span
              class="text-xl cursor-pointer"
              on:click={() => toggleTask(index)}
            >
              {task.completed ? "😊" : "😐"}
            </span>
          </li>
        {/each}
      </ul>

      <!-- Add Task -->
      <div class="px-5 py-4 flex">
        <input
          type="text"
          bind:value={newTask}
          on:keypress={handleKeyPress}
          class="flex-1 px-4 py-3 border border-[#e0e0e0] text-sm text-[#4c5c68] outline-none"
          placeholder="Add Task"
        />
      </div>

      <button
        on:click={addTask}
        class="w-30 h-10 bg-[#00d474] text-white border-none rounded-full text-base font-bold cursor-pointer block mx-auto relative -bottom-5 shadow-sm hover:bg-[#00c06a]"
      >
        Add
      </button>
    </div>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;800&display=swap");

  :root {
    font-family: "Roboto", Tahoma, Geneva, Verdana, sans-serif;
  }
</style>

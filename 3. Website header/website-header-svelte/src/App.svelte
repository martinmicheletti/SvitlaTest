<script>
  import WhiteDressWoman2 from "./assets/white-dress-woman-2.jpg";
  import WhiteDressWoman3 from "./assets/white-dress-woman-3.jpg";
</script>

<main>
  <div class="flex min-h-screen font-bold flex-col md:flex-row">
    <div
      class="flex relative min-h-[60vh] flex-[65] p-4 md:p-16 w-full overflow-hidden bg-[url('./assets/white-dress-woman.jpg')] bg-center bg-cover bg-no-repeat contrast-80"
    >
      <div class="relative z-10 h-auto flex flex-col flex-1">
        <div class="header flex justify-start items-start flex-[0.5]">
          <div
            class="menu flex items-center gap-4 text-white text-sm cursor-pointer mr-10"
          >
            <div class="menu-icon">
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1H18M0 6H18M0 11H18"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            Menu
          </div>
        </div>

        <div
          class="middle-content flex-[0.5] flex justify-between items-center"
        >
          <div class="collection-tag text-white text-xs opacity-80">
            <div>Summer</div>
            <div>Collection</div>
            <div>2020</div>
          </div>
          <div class="navigation flex items-center text-white">
            <span class="text-sm cursor-pointer">Next</span>
            <div
              class="navigation-line w-24 h-px bg-white bg-opacity-50 mx-4"
            ></div>
            <span class="text-sm cursor-pointer">Previous</span>
          </div>
        </div>

        <div class="bottom-content flex-1 flex flex-col justify-between gap-12">
          <div
            class="summer-title text-white text-5xl md:text-9xl font-light leading-[0.9] font-serif"
          >
            <div>Summer</div>
            <div>2020</div>
          </div>
          <div class="footer-button-container flex justify-between">
            <div class="social-icons flex gap-4 items-end">
              <div class="text-white text-xs cursor-pointer mr-5">FB</div>
              <div class="text-white text-xs cursor-pointer mr-5">PIN</div>
              <div class="text-white text-xs cursor-pointer mr-5">IG</div>
            </div>
            <div class="paginator flex gap-20">
              <div class="text-gray-300 text-4xl cursor-pointer">.</div>
              <div class="text-gray-300 text-4xl cursor-pointer">.</div>
              <div class="text-white text-4xl font-bold cursor-pointer">.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex-[35] bg-[#f6eee3] flex flex-col p-16 gap-4 justify-between"
    >
      <div class="product-header flex justify-end flex-[0.5]">
        <div class="language-switch flex items-start gap-8">
          <div class="lang text-xs text-[#333] cursor-pointer mr-2.5">ENG</div>
          <div class="lang-selector text-xs text-[#999] cursor-pointer">FR</div>
        </div>
      </div>

      <div
        class="parent flex-1 grid grid-cols-[repeat(4,1fr)_0.2fr] grid-rows-[repeat(6,1fr)] gap-x-4 gap-y-6"
      >
        <div class="div1 grid-area-[1/5/5/6]"></div>
        <div class="div2 grid-area-[1/6/6/6]">
          <div
            class="side-text w-8 flex flex-col justify-between items-end gap-8 self-end"
          >
            <div
              class="vertical-text [writing-mode:vertical-rl] text-xs text-[#999]"
            >
              Ref. 6657794
            </div>
            <div
              class="navigation-line-vertical w-px h-24 bg-[#999] my-0 mx-2"
            ></div>
            <div
              class="vertical-text [writing-mode:vertical-rl] text-xs text-[#999]"
            >
              What looks feels
            </div>
          </div>
        </div>
        <div class="div3 grid-area-[6/3/7/7] flex justify-end items-end">
          <div class="shop-button-container">
            <button
              class="shop-button py-6 px-18 border-2 border-[#131313] bg-transparent text-bold text-[#131313] uppercase text-xs cursor-pointer transition-all duration-300 hover:bg-[#333] hover:text-white"
            >
              SHOP NOW
            </button>
          </div>
        </div>
        <div class="div4 grid-area-[4/1/7/3] flex items-end">
          <div class="product-image-button">
            <img
              class="product-image-button w-full max-w-[10em] object-cover"
              src={WhiteDressWoman3}
              alt="White draped dress full view"
            />
          </div>
        </div>
        <div class="div5 grid-area-[1/1/4/5]">
          <div
            class="product-images-container flex-1 flex justify-end items-center"
          >
            <div class="product-image">
              <img
                class="product-image w-full max-w-[10em] object-cover"
                src={WhiteDressWoman2}
                alt="White draped dress front view"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");

  body {
    font-family: "Inter", sans-serif;
  }

  .font-serif {
    font-family: "Times New Roman", Times, serif;
  }

  .grid-area-\[1\/5\/5\/6\] {
    grid-area: 1 / 5 / 5 / 6;
  }
  .grid-area-\[1\/6\/6\/6\] {
    grid-area: 1 / 6 / 6 / 6;
  }
  .grid-area-\[6\/3\/7\/7\] {
    grid-area: 6 / 3 / 7 / 7;
  }
  .grid-area-\[4\/1\/7\/3\] {
    grid-area: 4 / 1 / 7 / 3;
  }
  .grid-area-\[1\/1\/4\/5\] {
    grid-area: 1 / 1 / 4 / 5;
  }
</style>

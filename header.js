document.getElementById('header').innerHTML = `
<header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
            
            <!-- Brand Logo -->
            <a href="index.html" class="flex items-center gap-3 group">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-violet-200 group-hover:scale-105 transition">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <div class="flex flex-col">
                    <span class="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-violet-600 transition">Devine<span class="text-violet-600">Pulse</span></span>
                    <span class="text-[10px] uppercase tracking-widest font-bold text-slate-400">Inspiration & Trends</span>
                </div>
            </a>

            <!-- Desktop Navigation Links -->
            <nav class="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-semibold text-slate-600">
                <a href="index.html" class="px-3 py-2 rounded-lg hover:text-violet-600 hover:bg-slate-50 transition">Home</a>
                <a href="food.html" class="px-3 py-2 rounded-lg hover:text-orange-600 hover:bg-orange-50/50 transition">Food</a>
                <a href="travel.html" class="px-3 py-2 rounded-lg hover:text-sky-600 hover:bg-sky-50/50 transition">Travel</a>
                <a href="nature.html" class="px-3 py-2 rounded-lg hover:text-emerald-600 hover:bg-emerald-50/50 transition">Nature</a>
                <a href="quotes.html" class="px-3 py-2 rounded-lg hover:text-amber-600 hover:bg-amber-50/50 transition">Quotes</a>
                <a href="fashion.html" class="px-3 py-2 rounded-lg hover:text-rose-600 hover:bg-rose-50/50 transition">Fashion</a>
                <a href="homedecor.html" class="px-3 py-2 rounded-lg hover:text-teal-600 hover:bg-teal-50/50 transition">Home Decor</a>
            </nav>

            <!-- Right CTA Action & Mobile Toggle Button -->
            <div class="flex items-center gap-3">
                <a href="fashion.html" class="hidden sm:inline-flex items-center justify-center bg-violet-50 text-violet-600 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-violet-100 transition">
                    Explore Trending
                </a>
                
                <!-- Mobile Menu Button -->
                <button id="menu-btn" class="md:hidden p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-violet-50 hover:text-violet-600 transition focus:outline-none" aria-label="Toggle Menu">
                    <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>

        </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-2 shadow-lg transition-all">
        <a href="index.html" class="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-violet-600 transition">Home</a>
        <a href="food.html" class="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition">Food & Recipes</a>
        <a href="travel.html" class="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition">Travel Destinations</a>
        <a href="nature.html" class="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition">Nature & Outdoors</a>
        <a href="quotes.html" class="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition">Daily Quotes</a>
        <a href="fashion.html" class="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-rose-50 hover:text-rose-600 transition">Fashion & Style</a>
        <a href="homedecor.html" class="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-teal-50 hover:text-teal-600 transition">Home Decor</a>
        <div class="pt-2">
            <a href="fashion.html" class="block text-center w-full bg-violet-600 text-white font-bold text-sm py-3 rounded-xl shadow-md hover:bg-violet-700 transition">Explore Trending</a>
        </div>
    </div>
</header>
`;

// Safe event binding after element is injected into DOM
setTimeout(() => {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    if(btn && menu) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('hidden');
        });

        // Close menu when clicking anywhere outside
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !btn.contains(e.target)) {
                menu.classList.add('hidden');
            }
        });
    }
}, 50);

// Dynamically inject the external script with data-cfasync="false"
const externalScript = document.createElement("script");
externalScript.setAttribute("data-cfasync", "false");
externalScript.src = "https://bauval.org/14/d4908b2006f8af7799973d6ae9997ce7";
document.head.appendChild(externalScript);
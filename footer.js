document.getElementById('footer').innerHTML = `
<footer class="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            
            <!-- Col 1: Brand Info -->
            <div class="space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white shadow-sm">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <span class="text-xl font-bold text-white tracking-tight">DevinePulse</span>
                </div>
                <p class="text-slate-400 text-sm leading-relaxed">
                    Your daily destination for handpicked creative lifestyle inspiration, modern guides, and trending ideas curated from across the web.
                </p>
            </div>

            <!-- Col 2: Categories -->
            <div>
                <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-4">Categories</h4>
                <ul class="space-y-2.5 text-sm">
                    <li><a href="food.html" class="text-slate-400 hover:text-white transition">Food & Recipes</a></li>
                    <li><a href="travel.html" class="text-slate-400 hover:text-white transition">Travel Destinations</a></li>
                    <li><a href="nature.html" class="text-slate-400 hover:text-white transition">Nature & Outdoors</a></li>
                    <li><a href="quotes.html" class="text-slate-400 hover:text-white transition">Daily Quotes</a></li>
                </ul>
            </div>

            <!-- Col 3: Lifestyle -->
            <div>
                <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-4">Lifestyle</h4>
                <ul class="space-y-2.5 text-sm">
                    <li><a href="fashion.html" class="text-slate-400 hover:text-white transition">Fashion & Style</a></li>
                    <li><a href="homedecor.html" class="text-slate-400 hover:text-white transition">Home Decor</a></li>
                    <li><a href="index.html" class="text-slate-400 hover:text-white transition">All Trending Posts</a></li>
                </ul>
            </div>

            <!-- Col 4: Legal Disclosures -->
            <div>
                <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-4">Legal Disclosures</h4>
                <div class="flex flex-col gap-2.5">
                    <a href="privacy-policy.html" class="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold px-3 py-2.5 rounded-lg transition text-center sm:text-left">Privacy Policy</a>
                    <a href="terms.html" class="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold px-3 py-2.5 rounded-lg transition text-center sm:text-left">Terms of Service</a>
                    <a href="disclaimer.html" class="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold px-3 py-2.5 rounded-lg transition text-center sm:text-left">Disclaimer</a>
                </div>
            </div>

        </div>

        <!-- Bottom Copyright Row -->
        <div class="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 text-center sm:text-left gap-2">
            <p>&copy; 2026 DevinePulse. All rights reserved.</p>
            <p>Designed for modern inspiration & affiliate discovery.</p>
        </div>

    </div>
</footer>
`;
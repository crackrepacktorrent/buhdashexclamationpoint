export default function Projects() {
	return (
		<div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
			<div>
				<div class="pb-4">
					<a href="https://repacker.itch.io/neigh" class="text-blue-600">
						neigh!
					</a>
				</div>
				<p class="pb-4">
					A playable concept for a point-n-click 2D adventure made with Godot and Popochiu.
				</p>
				<p>
					A catastrophic climate collapse forces humanity to flee Earth. Take control of
					Nova—a horse's cryogenically preserved head accidentally reanimated after 3000
					years when his chamber leaks onto a John Deere android mow-bot. Once the beloved
					companion of Chevy, a Texan farmer who couldn't bear to leave his trusty steed
					behind during the evacuation, Nova must navigate a transformed Earth abandoned by
					the NEIGH program (Nationwide Evacuation to Intergalactic Habitable Sanctuaries).
					With his consciousness now inhabiting farm machinery, Nova embarks on a bizarre
					journey through a world reclaimed by nature, searching for answers about what
					remains of the universe and the fate of his human companion.
				</p>
			</div>

			<div>
				<div class="pb-4">
					<a href="https://simrant.itch.io/fiximupim-v2" class="text-blue-600">
						fiximupim
					</a>
				</div>
				<p class="pb-4">
					A demo for an anti(?)-dating sim made with Ren'Py that explores the idea of mankeeping.
				</p>
				<p>
					Inspired by Ferrara and Vergara's 2024 research on "mankeeping," fiximupim explores
					the heavy emotional labor women pick up in heterosexual relationships. Play as one of
					god's angels, entrusted with rehabilitating men you've been matched to before breaking
					up with them and releasing them into the dating sphere. Players navigate the challenging
					task of cultivating six key traits in their virtual partners—from emotional intelligence
					to responsibility. Fiximupim balances playful game mechanics with social critique,
					creating an introspective experience for anyone who's ever thought, "I can fix him."
				</p>
			</div>

			<div>
				<div class="pb-4">
					<a href="https://ccrma.stanford.edu/~josedav/256A/p/1/" class="text-blue-600">
						write me a letter
					</a>
				</div>
				<p class="pb-4">
					An audiovisualizer crafted in ChucK and ChuGL that transforms sound into a letter (of
					sorts).
				</p>
				<p>
					Inspired by the question "how can i make a visualizer write me a letter?", this
					visualizer algorithmically generates words whose properties - rotation, spacing,
					length, number of samples shown, color, and line thickness - respond directly to
					audio input. The visualizer analyzes incoming sound using RMS and maximum amplitude
					to control various parameters of the writing. Punctuation is added during musical
					pauses, and the writing speed and content shift in response to the audio's
					characteristics.
				</p>
			</div>

			<div>
				<div class="pb-4">
					<a href="https://github.com/crackrepacktorrent/rustydns" class="text-blue-600">
						rustydns
					</a>
				</div>
				<p class="pb-4">
					A DNS recursive resolver written in Rust as a senior capstone project.
				</p>
				<p>
					Resolves domain names by recursively querying authoritative nameservers starting
					from the root, with TTL-based caching, support for A and NS records, and an
					interactive REPL. Built using only Rust's standard library networking primitives
					(raw UDP sockets, manual DNS packet parsing/serialization) to learn the protocol
					from the ground up.
				</p>
			</div>

			<div>
				<div class="pb-4">
					<a href="https://github.com/crackrepacktorrent/yah" class="text-blue-600">
						yah
					</a>
				</div>
				<p class="pb-4">
					The web platform behind{' '}
					<a href="https://y4h.org" class="text-blue-600">
						y4h.org
					</a>
					, the Youth Alliance for Housing, a collective of directly impacted young people
					fighting for a world where housing is decommodified, homelessness does not exist, and
					everyone is guaranteed a safe, accessible, and permanently affordable home.
				</p>
				<p>
					A monorepo powering the org's public site (SvelteKit + Storyblok CMS) and an internal
					admin panel (SolidStart) for managing shortlinks, analytics, email campaigns, and
					members. Self-hosted on a VPS with Docker, Caddy, and PostgreSQL.
				</p>
			</div>

			<div>
				<div class="pb-4">
					<a href="https://github.com/crackrepacktorrent/listeningto" class="text-blue-600">
						listeningto
					</a>
					{' / '}
					<a
						href="https://github.com/crackrepacktorrent/buhdashexclamationpointislisteningto"
						class="text-blue-600"
					>
						buh-!islisteningto
					</a>
				</div>
				<p class="pb-4">A live feed of what i'm listening to right now.</p>
				<p>
					An Android app captures what's playing on your phone and a companion web app displays
					it, updating in real-time via SSE.
				</p>
			</div>
		</div>
	);
}

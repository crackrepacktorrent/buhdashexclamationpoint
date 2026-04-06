import { type ParentProps } from 'solid-js';
import { A, useLocation } from '@solidjs/router';
import arepa2 from '~/assets/arepas/arepa2.png';

function NavLink(props: { href: string; children: string }) {
	const location = useLocation();
	const isActive = () => location.pathname === props.href;

	return (
		<A href={props.href} class={isActive() ? 'active' : ''} activeClass="" inactiveClass="">
			{props.children}
		</A>
	);
}

export default function Layout(props: ParentProps) {
	return (
		<>
			{/* Mobile header */}
			<header class="flex items-baseline justify-between p-4 lg:hidden">
				<h1 class="font-black text-3xl">buh-!</h1>
				<nav class="flex gap-3 text-sm">
					<NavLink href="/">projects</NavLink>
					<NavLink href="/art">art</NavLink>
					<NavLink href="/resume">resume</NavLink>
				</nav>
			</header>

			{/* Main grid */}
			<div class="px-4 pb-8 lg:pb-0 lg:py-[2vh] lg:grid lg:grid-cols-[250px_1fr_150px] lg:gap-16 lg:w-[95vw] lg:mx-auto">
				{/* Desktop sidebar */}
				<aside class="hidden lg:block lg:sticky lg:top-[2vh] lg:self-start">
					<h1 class="pb-10 font-black text-5xl">buh-!</h1>
					<img src={arepa2} alt="an arepa with a face!" class="pb-10" />
					<p class="pb-10">i like:</p>
					<ul class="list-disc pl-6 pb-10">
						<li>piracy</li>
						<li>game dev/design (esp with bevy)</li>
						<li>videogames</li>
						<li>internet privacy</li>
						<li>computer/network security</li>
						<li>p2p protocols</li>
						<li>cryptography</li>
						<li>anarchism</li>
						<li>critical theory</li>
					</ul>
					<p class="pb-10">reach me at...</p>
					<ul class="list-disc pl-6">
						<li>ihackpigs&lt;at&gt;protonmail&lt;dot&gt;com</li>
					</ul>
				</aside>

				{/* Content */}
				<main class="lg:pb-16">{props.children}</main>

				{/* Desktop nav */}
				<nav
					class="hidden lg:flex lg:flex-col lg:justify-between lg:sticky lg:top-[2vh] lg:self-start lg:h-[96vh] text-right"
					dir="rtl"
				>
					<ul class="list-disc pr-6">
						<li>
							<NavLink href="/">projects</NavLink>
						</li>
						<li>
							<NavLink href="/art">art</NavLink>
						</li>
						<li>
							<NavLink href="/resume">resume</NavLink>
						</li>
					</ul>

					<ul class="list-disc pr-6">
						<li>
							<a
								href="https://github.com/crackrepacktorrent"
								class="text-blue-600"
								target="_blank"
								rel="noopener noreferrer"
							>
								github
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/jos%C3%A9davila/"
								class="text-blue-600"
								target="_blank"
								rel="noopener noreferrer"
							>
								linkedin
							</a>
						</li>
					</ul>
				</nav>
			</div>

			{/* Mobile footer */}
			<footer class="lg:hidden px-4 pb-8 mt-4 border-t pt-4">
				<div class="flex gap-4 items-start">
					<img src={arepa2} alt="an arepa with a face!" class="w-20 shrink-0" />
					<div>
						<p class="font-bold">josé davila-ciullo (they/them)</p>
						<div class="flex gap-3 mt-1 text-sm">
							<a
								href="https://github.com/crackrepacktorrent"
								class="text-blue-600"
								target="_blank"
								rel="noopener noreferrer"
							>
								github
							</a>
							<a
								href="https://www.linkedin.com/in/jos%C3%A9davila/"
								class="text-blue-600"
								target="_blank"
								rel="noopener noreferrer"
							>
								linkedin
							</a>
						</div>
						<p class="text-sm mt-1 text-gray-600">
							ihackpigs&lt;at&gt;protonmail&lt;dot&gt;com
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}

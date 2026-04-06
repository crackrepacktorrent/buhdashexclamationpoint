import { type JSX } from 'solid-js';
import resume from '~/assets/resume.pdf';

function Section(props: { title: string; children: JSX.Element }) {
	return (
		<div class="mb-4">
			<h2 class="text-sm font-bold uppercase tracking-wider border-b border-black pb-1 mb-2">
				{props.title}
			</h2>
			{props.children}
		</div>
	);
}

function Job(props: { company: string; location: string; title: string; dates: string; children: JSX.Element }) {
	return (
		<div class="mb-3">
			<div class="flex justify-between">
				<span class="font-bold">{props.company}</span>
				<span>{props.location}</span>
			</div>
			<div class="flex justify-between">
				<span class="italic">{props.title}</span>
				<span>{props.dates}</span>
			</div>
			<ul class="list-disc pl-5 mt-1 text-sm">
				{props.children}
			</ul>
		</div>
	);
}

export default function Resume() {
	return (
		<div class="max-w-3xl mx-auto py-8 text-sm leading-relaxed">
			{/* Header */}
			<div class="text-center mb-4">
				<h1 class="text-2xl font-bold tracking-wide uppercase">José A. Davila-Ciullo</h1>
				<p>www.buhdashexclamationpoint.com | jsdvlcll@gmail.com</p>
			</div>

			{/* Education */}
			<Section title="Education">
				<div class="flex justify-between">
					<span class="font-bold">Stanford University</span>
					<span>Stanford, CA</span>
				</div>
				<div class="flex justify-between">
					<span>Bachelors: Computer Science (Systems focus) <span class="italic">GPA: 3.7</span></span>
					<span>Sept 2020 - March 2025</span>
				</div>
			</Section>

			{/* Coursework */}
			<Section title="Relevant Coursework">
				<div class="grid grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-1 text-sm">
					<span>Operating Systems</span>
					<span>Computer Networking</span>
					<span>Compilers</span>
					<span>Computer + Network Security</span>
					<span>Advanced Cryptography</span>
					<span>Blockchain Technology</span>
					<span>Web Development</span>
					<span>Designing Serious Games</span>
					<span>Rusty Systems</span>
					<span>Feminist Games Studio</span>
				</div>
			</Section>

			{/* Experience */}
			<Section title="Work Experience">
				<Job company="Tinuiti" location="Remote" title="Software Engineer II" dates="May 2025 - Present">
					<li>Designed a DuckDB-WASM-powered analytics platform to power our cross-channel metrics system, eliminating server fetch times and enabling real-time chart updates without more backend calls.</li>
					<li>Built a matching frontend component library including redesigned charts and tables, allowing users to create customized analytics dashboards with granular control now that our data was right in their browser.</li>
					<li>Recruited as an intern and was later offered a full-time role. Now on the data engineering team, primarily writing Go, Java, and SQL.</li>
				</Job>

				<Job company="Stanford Computer Science Department" location="Stanford, CA" title="CS106A/B Teaching Assistant" dates="March 2024 - April 2025">
					<li>Led weekly hour-long sections for 10+ students in Stanford's Programming Methodology/Abstractions courses, reinforcing concepts covered in lectures through engaging examples and group problem-solving.</li>
					<li>Provided detailed feedback on student assignments weekly, identifying common misconceptions and individually guiding them to improve their understanding.</li>
					<li>Held weekly office hours and LaIR to help students debug their assignments and answer any of their CS, university, life questions.</li>
				</Job>

				<Job company="Youth Alliance for Housing" location="New York City, NY" title="Full Stack Dev/Security Zine Producer" dates="Jun 2022 - Present">
					<li>Designed and developed the organization's central website (y4h.org) using SvelteKit and StoryBlok to share their initiatives and accrue new members.</li>
					<li>Currently continue my involvement with the organization as a member and sole maintainer of the website's repo.</li>
				</Job>

				<Job company="Canyons Rock Climbing Gym" location="Dallas, TX" title="Event Manager/Climbing Instructor/Desk" dates="Jun 2019 - Aug 2021">
					<li>Directed gym community events including birthdays, lock-ins, climbing competitions, etc.</li>
					<li>Managed front-desk operations, new member registrations/belaying lessons, and liability waivers.</li>
					<li>Ran and managed kids climb with two other coworkers.</li>
				</Job>
			</Section>

			{/* Skills */}
			<Section title="Skills">
				<div class="text-sm">
					<p><span class="font-bold">Programming Languages:</span> C/C++, Zig, Go, Rust, Java, Lua, Python, SQL, frontend stuff</p>
					<p><span class="font-bold">Areas of Interest:</span> Game development, ECS, network/computer security, P2P protocols, fediverse</p>
				</div>
			</Section>

			<div class="mt-6 text-center">
				<a href={resume} target="_blank" rel="noopener noreferrer" class="text-blue-600 text-sm">
					download as pdf
				</a>
			</div>
		</div>
	);
}

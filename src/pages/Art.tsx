import fox from '~/assets/chefs/fox.png';
import ham from '~/assets/chefs/ham.png';
import henny from '~/assets/chefs/henny.png';
import sheep from '~/assets/chefs/sheep.png';
import nerdy from '~/assets/boys/nerdy.png';
import playful from '~/assets/boys/playful.png';
import hot from '~/assets/boys/hot.png';

export default function Art() {
	return (
		<>
			<div class="pb-10">
				<h1 class="pb-10">
					Some of my favorite character designs from a Twine game i made called Cooking Pals:
				</h1>
				<div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
					<img src={fox} alt="fox chef character" />
					<img src={ham} alt="ham chef character" />
					<img src={henny} alt="henny chef character" />
					<img src={sheep} alt="sheep chef character" />
				</div>
			</div>

			<div>
				<h1 class="pb-10">Head sprites for some of the dudes you can date in fiximupim:</h1>
				<div class="grid grid-cols-3 gap-4 w-full md:w-[80%]">
					<img src={nerdy} alt="nerdy character sprite" />
					<img src={playful} alt="playful character sprite" />
					<img src={hot} alt="hot character sprite" />
				</div>
			</div>
		</>
	);
}

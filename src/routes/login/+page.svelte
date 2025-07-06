<script lang="ts">
	import { Facebook, Eye } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import CardHeader from '$lib/components/ui/CardHeader.svelte';
	import CardContent from '$lib/components/ui/CardContent.svelte';
	import CardFooter from '$lib/components/ui/CardFooter.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import Separator from '$lib/components/ui/Separator.svelte';

	let email = $state('');
	let password = $state('•••••••••••••');
	let showPassword = $state(false);

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}

	function handleLogin() {
		console.log('Login attempt:', { email, password });
		// Add your login logic here
	}

	function handleFacebookLogin() {
		console.log('Facebook login attempt');
		// Add your Facebook login logic here
	}
</script>

<div class="flex min-h-screen items-start justify-center bg-monochromewhite">
	<div class="flex w-full max-w-[1440px] items-start">
		<div class="flex-1"></div>

		<div class="flex w-[375px] flex-col items-start py-[50px]">
			<Card class="flex h-[756.5px] w-full flex-col items-start overflow-hidden rounded-[20px] border-none">
				<CardHeader class="flex w-full flex-col items-center justify-center bg-monochromeblack px-0 pb-[46.25px] pt-[46.25px] rounded-t-[20px]">
					<div class="relative w-14 h-[55px] mb-2.5">
						<img
							class="absolute w-[49px] h-12 top-[3px] left-1"
							alt="Logo"
							src="/group.png"
						/>
					</div>
					<h2 class="font-bold-24 text-monochromegray-100 text-[24px] font-bold">
						Sign in to account
					</h2>
				</CardHeader>

				<CardContent class="flex h-[523px] w-full flex-col items-start rounded-b-[20px] bg-monochromeplain-white p-0">
					<div class="flex w-full flex-1 items-center justify-around">
						<div class="flex w-full flex-1 flex-col items-start gap-2.5 py-10">
							<div class="flex w-full flex-col items-center justify-center gap-2.5">
								<div class="w-full max-w-[386px] px-[25px] py-2.5">
									<!-- Email Field -->
									<div class="p-2.5 flex flex-col items-start gap-2.5 w-full">
										<label for="email" class="font-normal text-black text-xs">
											Email Address
										</label>
										<Input
											id="email"
											bind:value={email}
											type="email"
											class="h-11 bg-monochromegray-100 rounded-[5px] border-monochromegray-800"
										/>
									</div>

									<!-- Password Field -->
									<div class="p-2.5 flex flex-col items-start gap-2.5 w-full">
										<label for="password" class="font-normal text-black text-xs">
											Password
										</label>
										<div class="relative w-full">
											<Input
												id="password"
												bind:value={password}
												type={showPassword ? 'text' : 'password'}
												class="h-11 bg-monochromegray-100 rounded-[5px] border-[#939185] pr-10"
											/>
											<Button
												variant="ghost"
												size="icon"
												class="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
												onclick={togglePasswordVisibility}
											>
												<Eye class="h-4 w-4 text-[#939185]" />
											</Button>
										</div>
									</div>

									<!-- Login Button -->
									<div class="p-2.5 flex flex-col items-start gap-2.5 w-full">
										<Button 
											class="w-full bg-monochromedark-gray text-monochromeplain-white font-bold rounded-lg"
											onclick={handleLogin}
										>
											Log In
										</Button>

										<div class="flex flex-col items-center justify-center gap-2.5 py-2.5 w-full">
											<p class="text-sm text-[#1c2028]">
												Don't have an account? <span class="font-bold">Sign up</span>
											</p>

											<div class="flex w-full items-center gap-[5px]">
												<Separator class="flex-1" />
												<span class="text-[10px] text-greysgray-500">or</span>
												<Separator class="flex-1" />
											</div>
										</div>
									</div>

									<!-- Facebook Button -->
									<div class="px-2.5 flex flex-col items-start gap-2.5 w-full">
										<Button 
											class="w-full bg-[#5382e7] text-monochromeplain-white font-bold rounded-lg flex items-center gap-2"
											onclick={handleFacebookLogin}
										>
											<Facebook class="h-5 w-5" />
											Continue with Facebook
										</Button>
									</div>

									<!-- Forgot Password -->
									<div class="p-2.5 flex flex-col items-start gap-2.5 w-full">
										<p class="w-full text-center text-[#4c4c4c] text-[12px] font-medium tracking-[0.5px]">
											Forgot password? Recover your account now.
										</p>
									</div>
								</div>
							</div>

							<CardFooter class="flex w-full flex-1 items-end justify-center gap-2.5 p-2.5 bg-transparent">
								<span class="text-[10px] text-[#4c4c4c] font-light">Terms of Use</span>
								<span class="text-[10px] text-[#4c4c4c] font-light">Privacy Policy</span>
								<span class="text-[10px] text-[#4c4c4c] font-light">Copyright 2025</span>
							</CardFooter>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>

		<div class="flex-1"></div>
	</div>
</div>
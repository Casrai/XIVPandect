<script lang="ts">
	import { page } from '$app/stores';
	import {
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		SidebarDropdownWrapper,
		SidebarDropdownItem
	} from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
	let spanClass = 'pl-2 self-center text-md text-gray-900 whitespace-nowrap dark:text-white';
</script>

<Sidebar asideClass="w-54" {activeUrl}>
		<SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
			<SidebarGroup>
				<SidebarItem label="Home" href="/" {spanClass}></SidebarItem>
				<SidebarDropdownWrapper label="Raiding" href="/raiding" {spanClass}>
					<SidebarDropdownItem label="Markers" href="/raiding/markers" />	
				</SidebarDropdownWrapper>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>

<div class="flex px-4 mx-auto w-full">
	<main class="lg:ml-72 w-full mx-auto">
		<slot />
	</main>
</div>
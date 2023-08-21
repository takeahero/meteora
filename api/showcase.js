export async function showcase() {
	try {
		const showcaseAccess = await fetch("https://meteora-json-server-tasks.vercel.app/")
		let product = await showcaseAccess.json()
		return product;
	}
	catch {
		alert('error')
	}
}

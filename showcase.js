export async function showcase() {
	try {
		const showcaseAccess = await fetch("./db.json")
		const product = await showcaseAccess.json()
		return product
	}
	catch {
		alert('error');
	}
}

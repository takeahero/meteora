export async function showcase() {
	try {
		const showcaseAccess = await fetch("../db.json")
		let product = await showcaseAccess.json()
		return product;
	}
	catch {
		alert('error')
	}
}

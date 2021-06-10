export default class Requests {
	constructor(url, data) {
		this.url = url;
		this.data = data;
	}

	async postData() {
		console.log(this.url);
		console.log(this.data);
		let res = await fetch(this.url, {
			method: 'POST',
			body: this.data,
		});
		return await res.text();
	}
}
